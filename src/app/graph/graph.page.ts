import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router,ActivatedRoute } from '@angular/router';
import { DataIntake,IntakeService } from '../firebase/intake.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  data:DataIntake;
  intakeID;

  constructor(private intakeService: IntakeService,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.intakeID =this.activatedRoute.snapshot.paramMap.get('id');
    this.intakeService.get(this.intakeID).subscribe(res => {
      this.data = res;
      this.mycharts();
    });
    
  }

  mycharts() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    var chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Protein", "Carbohydrate", "Fuite", "Veges", "Fat"],
        datasets: [{
          label: "My First dataset",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          data: [this.data.Protein, this.data.Carbohydrate, this.data.Fuite, this.data.Veges, this.data.Fat],
          borderWidth: 1
        }]
      }
    });
  }

}
