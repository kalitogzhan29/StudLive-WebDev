import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'studLife';
  showHeader=true;
  constructor(private router:Router){

    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/login' || val.url=='/signup'){
            this.showHeader=false
          }
        }
      }

    )
  }
}
