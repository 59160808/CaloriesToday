import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TotlecalPublicPage } from './totlecal-public.page';

const routes: Routes = [
  {
    path: '',
    component: TotlecalPublicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TotlecalPublicPage]
})
export class TotlecalPublicPageModule {}
