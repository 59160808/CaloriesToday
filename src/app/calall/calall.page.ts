import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataPerson,DataService } from '../firebase/data.service';
@Component({
  selector: 'app-calall',
  templateUrl: './calall.page.html',
  styleUrls: ['./calall.page.scss'],
})
export class CalallPage implements OnInit {

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
    Activity:0,
    bee:0,
    tee:0
  }

  // Stress=0;
  // Activity=0;
  // nweight:number=0;
  // nheight:number=0;
  bee:number;
  ntee:number;
  idObj:string;

  ngOnInit() {

    this.idObj = this.activatedRoute.snapshot.paramMap.get('id');
    this.boot();

  }

  getGender(){
    return this.dataPerson.Gender=="F" ? 66.47 : 65.09;
  }

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private dataService: DataService,private storage: Storage) {
    
   }
  boot(){
    this.dataService.get(this.idObj).subscribe(res => {
      this.dataPerson = res;
      this.bee = this.getGender() + ( 13.75 * this.dataPerson.Weight ) + ( 5.003 * this.dataPerson.Height ) - 6.775 * this.dataPerson.Age;
      this.ntee=this.bee*this.dataPerson.Stress*this.dataPerson.Activity

      this.dataPerson.bee = this.bee
      this.dataPerson.tee = this.ntee

      console.log(res);
      this.dataService.update(this.dataPerson).then(res => {
        console.log("update success");
      });
      
    });

  }

 clickback() {
 
  }


}
