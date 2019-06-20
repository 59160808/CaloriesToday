import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService, User } from '../firebase/login.service';
import { DataPerson,DataService } from '../firebase/data.service';

import { ActivatedRoute } from '@angular/router';
import { calcBindingFlags } from '@angular/core/src/view/util';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.page.html',
  styleUrls: ['./addperson.page.scss'],
})
export class AddpersonPage implements OnInit {
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
    Gender:""
  }
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

      this.loginService.get(userID).subscribe(res => {
        this.dataPerson.login_id = res.id
        this.userData = res;
        console.log(res);

      });
    });



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

    this.storage.set('person',JSON.stringify({
      name:this.dataPerson.Name,
      lastname:this.dataPerson.Lastname
    }) );

    this.storage.set('person_data',JSON.stringify(this.dataPerson) );
    this.router.navigateByUrl('/bee-tee');


  
   
    }
   
 

  }


