import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrganiztionsComponent } from './organiztions/organiztions.component';
import { GovermentComponent } from './goverment/goverment.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LastNewsComponent } from './last-news/last-news.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { OrganizationService } from './service/organization/organization.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainPageComponent,
    OrganiztionsComponent,
    GovermentComponent,
    ProfileComponent,
    LoginComponent,
    LastNewsComponent,

    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
