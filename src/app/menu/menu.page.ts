import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DataPerson,DataService } from '../firebase/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private person = {
    name:"",
    lastname:""
  }
  
  constructor(private dataService: DataService,private activatedRoute: ActivatedRoute, private storage: Storage) { 

  }

  ngOnInit() {
    
    this.person.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.person.lastname = this.activatedRoute.snapshot.paramMap.get('lastname');
    if(this.person.name != null && this.person.lastname != null ){

      console.log(this.person);
    
      this.storage.set('person',JSON.stringify(this.person) );

      this.dataService.getByPerson(this.person.name,this.person.lastname).subscribe(res => {
        console.log(res);
        let data = res[res.length-1];
        this.storage.set('person_data',JSON.stringify(data) );
      });
      
    }
    


  }

}
