import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cal-allpublic',
  templateUrl: './cal-allpublic.page.html',
  styleUrls: ['./cal-allpublic.page.scss'],
})
export class CalAllpublicPage implements OnInit {
 
  Gender=0;
  Stress=0;
  Activity=0;
  nweight=0;
  nheight=0;
  nage=0;
  bee:number;


  ngOnInit() {
  this.nage = parseFloat(this.activatedRoute.snapshot.paramMap.get('age'));
  this.Gender = parseFloat(this.activatedRoute.snapshot.paramMap.get('gender'));
  this.Stress = parseFloat(this.activatedRoute.snapshot.paramMap.get('stress'));
  this.Activity = parseFloat(this.activatedRoute.snapshot.paramMap.get('activity'));
  this.nweight = parseFloat(this.activatedRoute.snapshot.paramMap.get('weight'));
  this.nheight = parseFloat(this.activatedRoute.snapshot.paramMap.get('height'));
  this.bee = this.Gender + ( 13.75 * this.nweight ) + ( 5.003 * this.nheight ) - 6.775 * this.nage;

}
constructor(private activatedRoute: ActivatedRoute,private router: Router,private storage: Storage) {
 
 }
}
