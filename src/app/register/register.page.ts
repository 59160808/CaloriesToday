import { Component, OnInit } from '@angular/core';
import { LoginService,User } from '../firebase/login.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private user:User={
    username:'',
    password:''
  }
  constructor(private loginService:LoginService,public alertController: AlertController) {

   }
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
    this.presentAlert();
    // this.loginService.add(this.user).then(async(res) => {


    //   console.log("success");
      
      
    // });
  }

}
