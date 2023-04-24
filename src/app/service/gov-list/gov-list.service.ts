import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GovListService {

  constructor() { }

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

