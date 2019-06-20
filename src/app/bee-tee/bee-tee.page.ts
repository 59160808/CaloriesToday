import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService, User } from '../firebase/login.service';
import { DataPerson,DataService } from '../firebase/data.service';
@Component({
  selector: 'app-bee-tee',
  templateUrl: './bee-tee.page.html',
  styleUrls: ['./bee-tee.page.scss'],
})
export class BeeTeePage implements OnInit {

  private userData: User = {
    Name: "",
    Lastname: "",
    No: "",
    Age: 0,
    Gender: "M",
  };
  private dataPerson: DataPerson ={
    login_id: "",
    Name:"",
    Lastname:"",
    No:"",
    Age:0,
    Gender:"",
    Weight:0,
    Height:0,
    Stress:0,
    Activity:0
    
  }
  Stress = 0;
  Activity = 0;
  nweight: number = 0;
  nheight: number = 0;
  nbee:number=0;



  constructor(private router: Router, private dataService: DataService, private loginService: LoginService, private storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.boot();
  }

  boot() {
    this.storage.get('person_data').then(person => {
      let p = JSON.parse(person);
      delete p.id;
      this.dataPerson = p;
    });
   



  }



  ngOnInit() {

  }

  selectGender(e) {

    this.dataPerson.Gender = e.target.value;

  }
  selectStress(e) {
    this.dataPerson.Stress = parseFloat(e.target.value);

  }
  selectActivity(e) {
    this.dataPerson.Activity = parseFloat(e.target.value);

  }
  
  getGender(){
    return this.dataPerson.Gender=="F" ? 66.47 : 65.09;
  }
 

  ok() {console.log(this.getGender)

    console.log(this.userData);
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    this.dataPerson.date_created = year + "-" + month + "-" + day;
    this.dataPerson.created_at = new Date();

    this.dataService.add(this.dataPerson).then(res => {
      // console.log("test");
      // console.log(res.id);
      this.router.navigateByUrl('/calall/' + res.id);
    });

   
    }
   
 

  }


