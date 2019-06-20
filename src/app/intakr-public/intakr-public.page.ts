import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController,AlertController } from '@ionic/angular';



@Component({
  selector: 'app-intakr-public',
  templateUrl: './intakr-public.page.html',
  styleUrls: ['./intakr-public.page.scss'],
})
export class IntakrPublicPage implements OnInit {
 
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
 
  constructor(private activatedRoute: ActivatedRoute,private router: Router,public navCtrl: NavController ) { }


  ngOnInit() {
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
    this.router.navigateByUrl('/totlecal-public/'+this.totleValue) 
}
}
