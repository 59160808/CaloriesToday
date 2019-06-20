import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'member', loadChildren: './member/member.module#MemberPageModule' },

  { path: 'menu/:name/:lastname', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'intake', loadChildren: './intake/intake.module#IntakePageModule' },
  { path: 'bee-tee', loadChildren: './bee-tee/bee-tee.module#BeeTeePageModule' },
  { path: 'calall/:id', loadChildren: './calall/calall.module#CalallPageModule' },
  { path: 'bee-teepublic', loadChildren: './bee-teepublic/bee-teepublic.module#BeeTeepublicPageModule' },
  { path: 'cal-allpublic/:weight/:height/:stress/:activity/:gender/:age', loadChildren: './cal-allpublic/cal-allpublic.module#CalAllpublicPageModule' },
  { path: 'me-nupublic', loadChildren: './me-nupublic/me-nupublic.module#MeNupublicPageModule' },
  { path: 'calories-day/:id', loadChildren: './calories-day/calories-day.module#CaloriesDayPageModule' },
  { path: 'intakr-public', loadChildren: './intakr-public/intakr-public.module#IntakrPublicPageModule' },
  { path: 'totlecal-public/:totlepublic', loadChildren: './totlecal-public/totlecal-public.module#TotlecalPublicPageModule' },
  { path: 'graph/:id', loadChildren: './graph/graph.module#GraphPageModule' },
  { path: 'storage-person/:user', loadChildren: './storage-person/storage-person.module#StoragePersonPageModule' },
  { path: 'graph2', loadChildren: './graph2/graph2.module#Graph2PageModule' },
  { path: 'addperson', loadChildren: './addperson/addperson.module#AddpersonPageModule' },
  { path: 'device', loadChildren: './device/device.module#DevicePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
