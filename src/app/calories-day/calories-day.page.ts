import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataIntake,IntakeService } from '../firebase/intake.service';
import { DataPerson,DataService } from '../firebase/data.service';
@Component({
  selector: 'app-calories-day',
  templateUrl: './calories-day.page.html',
  styleUrls: ['./calories-day.page.scss'],
})

export class CaloriesDayPage implements OnInit {
 
  ntotleValue=0;
  datas:DataPerson[];
  beetotal = 0;
  intakeID;

 
  ngOnInit() {

    this.intakeID =this.activatedRoute.snapshot.paramMap.get('id');
    this.intakeService.get(this.intakeID).subscribe(res => {
      this.ntotleValue = res.Totle;
    });
    
    
  }

  sum(){
    for (let i = 0; i < this.datas.length; i++) {
      let obj = this.datas[i];
      this.beetotal = obj.bee*obj.Activity*obj.Stress;

      
    }
  }

  constructor(private intakeService: IntakeService,private activatedRoute: ActivatedRoute, private dataService: DataService,private router: Router,private storage: Storage) {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    this.storage.get('login').then((id) => {
      this.dataService.getByDate(id,year + "-" + month + "-" + day).subscribe(res => {
        this.datas = res;
          console.log(res);
          this.sum();
      });
    });
    
   }
  }