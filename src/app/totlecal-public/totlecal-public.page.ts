import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-totlecal-public',
  templateUrl: './totlecal-public.page.html',
  styleUrls: ['./totlecal-public.page.scss'],
})
export class TotlecalPublicPage implements OnInit {

  ntotleValue=0;
 tee:any
 
  ngOnInit() {
    this.ntotleValue = parseFloat(this.activatedRoute.snapshot.paramMap.get('totlepublic'));
    this.storage.get('tee').then((val) => {
      console.log(val);
      this.tee = val
    });
   
  
  }
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private storage: Storage) {
   
   }
  }