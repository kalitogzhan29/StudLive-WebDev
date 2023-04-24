import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OrganiztionsComponent } from './organiztions/organiztions.component';
import { GovermentComponent } from './goverment/goverment.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"main",component:MainPageComponent},
  {path:"organiztions",component:OrganiztionsComponent},
  {path:"goverment",component:GovermentComponent},
  {path:"profile",component:ProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"lastNews",component:LastNewsComponent},
  {path:"signup",component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
