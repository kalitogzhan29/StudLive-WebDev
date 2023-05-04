import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OrganiztionsComponent } from './organiztions/organiztions.component';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LastNewsComponent } from './last-news/last-news.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EventsComponent } from './events/events.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LastPageComponent } from './last-page/last-page.component';

const routes: Routes = [
  {path:"main",component:MainPageComponent},
  {path:"organiztions",component:OrganiztionsComponent},
 
  {path:"profile",component:ProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"lastnews",component:LastNewsComponent},
  {path:"signup",component:SignUpComponent},
  {path:"events",component:EventsComponent},
  {path:"editprofile",component:EditProfileComponent},
  {path:"lastnews/:newsId", component:LastPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
