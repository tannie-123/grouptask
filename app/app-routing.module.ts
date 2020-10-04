import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NewsdetailsComponent } from './pages/newsdetails/newsdetails.component';
 import { SearchpageComponent } from './pages/searchpage/searchpage.component';
const routes: Routes = [

  {path:'',redirectTo:'/landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'newsdetails/:ref',component:NewsdetailsComponent},
 {path:'Searchpage/:ref',component:SearchpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
