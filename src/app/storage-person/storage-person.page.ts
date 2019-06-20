import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService, User } from '../firebase/login.service';
import { DataPerson,DataService } from '../firebase/data.service';

import { ActivatedRoute } from '@angular/router';
import { calcBindingFlags } from '@angular/core/src/view/util';


@Component({
  selector: 'app-storage-person',
  templateUrl: './storage-person.page.html',
  styleUrls: ['./storage-person.page.scss'],
})
export class  StoragePersonPage implements OnInit {

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

  private dataPersonFullName = [];
  private dataPersonName = [];
  private dataPersonNameTemp = [];
  private searchTerm: string = "";
  Stress = 0;
  Activity = 0;
  nweight: number = 0;
  nheight: number = 0;
  nbee:number=0;

  username;

  constructor(private router: Router, private dataService: DataService, private loginService: LoginService, private storage: Storage, public navCtrl: NavController, public alertCtrl: AlertController,private activatedRoute: ActivatedRoute) {
    this.boot();
  }

  boot() {
    this.storage.get('login').then(userID => {
      console.log(userID);

      this.dataService.getByUser(userID).subscribe(res => {
        this.dataPersonName = [];
        this.dataPersonFullName = [];
        for (let i = 0; i < res.length; i++) {
          let element = res[i];
          let name = res[i].Name + " " + res[i].Lastname
          if(this.dataPersonFullName.indexOf(name) == -1 && res[i].Name != ""){
            this.dataPersonFullName.push(name);
            let obj = {
              name:res[i].Name,
              lastname:res[i].Lastname,
              Full:name
            };
            this.dataPersonName.push(obj);
            this.dataPersonNameTemp.push(obj);
          }
        }
          console.log(this.dataPersonFullName);
      });
    });



  }

  

  filterItems() {
    console.log("true");
    if(this.searchTerm.toLowerCase()==""){
      this.dataPersonNameTemp = this.dataPersonName;
    }else{
      this.dataPersonNameTemp = this.dataPersonName.filter(item => {
        return item.Full.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    
    
  }



  ngOnInit() {

    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    console.log(this.username);


  }

  selectGender(e) {

    this.dataPerson.Gender = e.target.value;

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


