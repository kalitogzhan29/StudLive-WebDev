import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Event } from 'src/app/models';
import { EventsService } from '../service/events/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {
  events: Event[] = []
  newTitle: string = '';
  newDescription: string = '';
  newPubDate: Date = {} as Date;
  newEventDate: Date= {} as Date;
  

  constructor(private eventService:EventsService){}
  getOrganizations() {
    this.eventService.getEvents().subscribe((data) =>
      this.events = data
    );
  }

  addOrganization(){
    this.eventService.createEvent(this.newTitle, this.newDescription,this.newPubDate,this.newEventDate).subscribe((data) => {
      this.events.push(data)
      this.newTitle=''
      this.newDescription=''
      this.newPubDate={} as Date
      this.newEventDate={} as Date

    })
  }

  deleteOrganization(events_id: number){
    this.eventService.deleteEvent(events_id).subscribe((organization) =>{
      this.events = this.events.filter((data) => organization.id !== events_id);
    })
  }

  updateOrganization(events_id: number){
    this.eventService.updateEvent(events_id, this.newTitle, this.newDescription,this.newPubDate,this.newEventDate).subscribe((data) => {
      this.events.forEach((data) =>{
          if (data.id == events_id){
            data.title = this.newTitle
          }
        }
      );
      this.newTitle = ''
      this.newDescription=''
      this.newPubDate={} as Date
      this.newEventDate={} as Date
    })
  }
  buyTicket() {
    window.open("https://web.telegram.org/z/" ,'menubar=off, toolbar=off');
  }
}

