import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrganiztionsComponent } from './organiztions/organiztions.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LastNewsComponent } from './last-news/last-news.component';

import { SignUpComponent } from './sign-up/sign-up.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EventsComponent } from './events/events.component';

import { OrganizationService } from './service/organization/organization.service';
import { HttpClientModule } from '@angular/common/http';
import { LastPageComponent } from './last-page/last-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainPageComponent,
    OrganiztionsComponent,
    ProfileComponent,
    LoginComponent,
    LastNewsComponent,

    SignUpComponent,
     EditProfileComponent,
     EventsComponent,
     LastPageComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
