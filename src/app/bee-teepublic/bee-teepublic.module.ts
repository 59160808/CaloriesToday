import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BeeTeepublicPage } from './bee-teepublic.page';

const routes: Routes = [
  {
    path: '',
    component: BeeTeepublicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BeeTeepublicPage]
})
export class BeeTeepublicPageModule {}
