import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController,AlertController } from '@ionic/angular';
import { DataIntake,IntakeService } from '../firebase/intake.service';
import { Storage } from '@ionic/storage';
import { DataPerson,DataService } from '../firebase/data.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.page.html',
  styleUrls: ['./intake.page.scss'],
})
export class IntakePage implements OnInit {

  
  nprotein : number;
  proteinValue=0;
  calProtein=0;

  ncarbohydrate: number;
  carbohydrateValue=0;
  calCarbohydrate=0;


  nfuite:number;
  calFuite=0;
  fuiteValue=0;

  nveges:number;
  calVeges=0;
  vegesValue=0;

  nfat:number;
  calFat=0;
  fatValue=0;

  otherValue=0;

  totleValue:number;
  private dataPerson: DataPerson;
 
  constructor(private intakeService: IntakeService, private storage: Storage,private activatedRoute: ActivatedRoute,private router: Router,public navCtrl: NavController ) { }

  ngOnInit() {
    this.storage.get('person_data').then(person => {
      let p = JSON.parse(person);
      this.dataPerson = p;
    });
       
  }

  selectproteinValue(e) {

    this.proteinValue = parseFloat(e.target.value);
    console.log(this.proteinValue)

  }

  selectcarbohydrateValue(e) {

    this.carbohydrateValue = parseFloat(e.target.value);
    console.log(this.carbohydrateValue)

  }
  selectfuiteValue(e) {

    this.fuiteValue = parseFloat(e.target.value);
    console.log(this.fuiteValue)

  }
  selectvegesValue(e) {

    this.vegesValue = parseFloat(e.target.value);
    console.log(this.vegesValue)

  }
  selectfatValue(e) {

    this.fatValue = parseFloat(e.target.value);
    console.log(this.fatValue)

  }

  ok(){
    this.calProtein=this.proteinValue*this.nprotein
    console.log(this.calProtein)
    this.calCarbohydrate=this.carbohydrateValue*this.ncarbohydrate
    console.log(this.calCarbohydrate)
    this.calFuite=this.fuiteValue*this.nfuite
    console.log(this.calFuite)
    this.calVeges=this.vegesValue*this.nveges
    console.log(this.calVeges)
    this.calFat=this.fatValue*this.nfat
    console.log(this.calFat)


    this.totleValue = this.proteinValue + this.carbohydrateValue + this.fuiteValue + this.vegesValue + this.fatValue + this.otherValue
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let data:DataIntake = {
      login_id:this.dataPerson.login_id,
      Name:this.dataPerson.Name,
      Lastname:this.dataPerson.Lastname,
      Protein:this.calProtein,
      Carbohydrate:this.calCarbohydrate,
      Fuite:this.calFuite,
      Veges:this.calVeges,
      Fat:this.calFat,
      Totle:this.totleValue,
      date_created:year + "-" + month + "-" + day,
      created_at:new Date()
    }
    console.log(data);
    
    this.intakeService.add(data).then(res => {
      // console.log("test");
      // console.log(res.id);
      // this.router.navigateByUrl('/calall/' + res.id);
      this.router.navigateByUrl('/calories-day/' + res.id);
      // console.log(this.totleValue) ;console.log( this.vegesValue)
    });
    
   
  }
  
   



  }
 

