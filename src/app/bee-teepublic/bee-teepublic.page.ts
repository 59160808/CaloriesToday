import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-bee-teepublic',
  templateUrl: './bee-teepublic.page.html',
  styleUrls: ['./bee-teepublic.page.scss'],
})
export class BeeTeepublicPage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, public alertCtrl: AlertController,private storage: Storage) { }
  Gender = 0;
  Stress = 0;
  Activity = 0;
  nweight= 0;
  nheight= 0;
  nage= 0;

  Bee:number;
  Tee:number;

  ngOnInit() {
  }

  selectGender(e) {
    this.Gender = parseFloat(e.target.value);
  }
  selectStress(e) {
    this.Stress = parseFloat(e.target.value);

  }
  selectActivity(e) {
    this.Activity = parseFloat(e.target.value);

  }
 
  
  ok() {
    this.Bee=this.Gender+(13.75*this.nweight)+(5.003*this.nheight)-6.775*this.nage
    this.router.navigateByUrl('/cal-allpublic/' + this.nweight + '/' + this.nheight + '/' + this.Stress + "/" + this.Activity + "/" + this.Gender + "/" + this.nage);
    this.storage.set('tee',this.Bee*this.Activity*this.Stress)
    console.log(this.nweight);
  }

}
