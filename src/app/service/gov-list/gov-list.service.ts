import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Organization } from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class GovListService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client:HttpClient) {
    
  }

  getOrganizations(): Observable<Organization[]>{
    return this.client.get<Organization[]>(`${this.BASE_URL}/api/organizations/`)
  }

  studGov=[
    {
      img:"https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk",
      name:"Diana Serikbayeva (BS,2course)",
      description:"President of SG"
     
    },
    {
      img:"https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk",
      name:"Kali Togzhan (FIT,2course)",
      description:"President of FIT"
     
    },
    {
      img:"https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk",
      name:"Yeldana Onaltayeva (BS,2course)",
      description:"President of BS"
     
    },
    {
      img:"",
      name:"Aruzhan Sarsembayeva (BS,2course)",
      description:"President of SG"
     
    }
    
  ]
}

