import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService,User } from '../firebase/login.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  private user={
    username:'',
    password:'',
    name:'',
    lastname:'',
    
    
   
  }
  constructor(private loginService:LoginService,public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Register',
      subHeader: 'Success',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    
  }
  register(){
    console.log('click');
    
    this.loginService.add(this.user).then(res => {

      console.log("success");
      this.presentAlert();

    }).catch(err=>{

      console.log(err);

    });
  }
}
