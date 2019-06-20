import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService,User } from '../firebase/login.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {
  nusername:string;
  npassword:string;
  constructor(private router: Router,private storage: Storage,public navCtrl: NavController,public alertCtrl: AlertController, private loginService: LoginService) {
    
  }
  
  onClickLoginBtn(){
    let user:User = {
      username:this.nusername,
      password:this.npassword
    }
    
    
    
    if(this.nusername == null || this.nusername == "" && this.npassword == null || this.npassword == "" ){
     alert("Please input username or password");
   }else{
    this.loginService.check(user).subscribe(res => {
      if(res.length>0){
        // console.log(res);
        this.storage.set('login', res[0].id);
        this.router.navigateByUrl('/storage-person/'+res[0].username);
      }else{
        alert("username or password is not correct")
      }
    });
  }
  } 
  
}


