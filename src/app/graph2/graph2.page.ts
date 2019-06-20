import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { DataPerson } from '../firebase/data.service';
import { DataIntake,IntakeService } from '../firebase/intake.service';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.page.html',
  styleUrls: ['./graph2.page.scss'],
})
export class Graph2Page implements OnInit {
  dataPerson:DataPerson;
  dataChart:DataIntake[];
  dataLabels:string[];
  dataValues:number[];

  constructor(private intakeService: IntakeService,private storage: Storage) { }

  ngOnInit() {

    this.storage.get('person_data').then(data =>{
      
      this.dataPerson = JSON.parse(data);
      console.log(this.dataPerson);
      

      this.getChartData();
    });

  }

  getChartData(){
    this.intakeService.getByPerson(this.dataPerson.Name,this.dataPerson.Lastname,6).subscribe(res => {
      this.dataChart = res;
      console.log(this.dataChart);
      this.sum();
      this.mycharts();
    });
  }

  sum(){
    this.dataLabels = [];
    this.dataValues = [];
    for (let i = 0; i < this.dataChart.length; i++) {
      let el = this.dataChart[i];
      let index = this.dataLabels.indexOf(el.date_created);
      if(index<0){
        this.dataLabels.push(el.date_created);
        this.dataValues.push(el.Totle);
      }else{
        this.dataValues[index] += el.Totle;
      }
      
    }

    console.log(this.dataLabels);
    console.log(this.dataValues);
    
  }

  mycharts() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.dataLabels,
        datasets: [{
          label: "Total",
          borderColor: 'rgba(255,99,132,1)',
          data:this.dataValues,
          borderWidth: 1
        }]
      }
    });
  }

}
