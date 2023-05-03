import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Event } from 'src/app/models';
@Injectable({
  providedIn: 'root'
})
export class  EventsService {
  BASE_URL = 'http://127.0.0.1:8000'
  id: number | undefined;


  constructor(private client:HttpClient) { }
  
   getEvents(): Observable<Event[]>{
    return this.client.get<Event[]>(`${this.BASE_URL}/api/events/`)
  }


  createEvent(title: string, description: string,pub_date: Date, event_date: Date): Observable<Event>{
    return this.client.post<Event>(
      `${this.BASE_URL}/api/events/`,
      {title: title,
      description: description,
      pub_date: pub_date,
      event_date: pub_date}
    )
  }

  deleteEvent(events_id: number): Observable<any>{
    return this.client.delete<any>(
      `${this.BASE_URL}/api/events/${events_id}/`
    )
  }
  
  updateEvent(events_id: number, title: string, description: string, pub_date: Date, event_date: Date): Observable<Event>{
    return this.client.put<Event>(
      `${this.BASE_URL}/api/events/${events_id}/`,
      {title: title,
      description: description,
      pub_date: pub_date,
      event_date: pub_date}
    )
  }

}
