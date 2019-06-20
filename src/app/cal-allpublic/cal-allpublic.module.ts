import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalAllpublicPage } from './cal-allpublic.page';

const routes: Routes = [
  {
    path: '',
    component: CalAllpublicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalAllpublicPage]
})
export class CalAllpublicPageModule {}
