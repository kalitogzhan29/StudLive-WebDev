import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Profile } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client:HttpClient) {
    
  }

  getProfile(): Observable<Profile[]>{
    return this.client.get<Profile[]>(`${this.BASE_URL}/api/profile/`)
  }

  createProfile(firstName: string,
    lastName: string,

    faculty: string,
    course: number,
    organization: string): Observable<Profile>{
    return this.client.post<Profile>(
      `${this.BASE_URL}/api/profile/`,
      {firstName: firstName,
        lastName: lastName,
        faculty: faculty,
        course: course,
        organization: organization}
    )
  }

  deleteProfile(profile_id: number): Observable<any>{
    return this.client.delete<any>(
      `${this.BASE_URL}/api/profile/${profile_id}/`
    )
  }
  
  updateProfile(profile_id: number, 
    firstName: string,
    lastName: string,
    faculty: string,
    course: number,
    organization: string): Observable<Profile>{
    return this.client.put<Profile>(
      `${this.BASE_URL}/api/profile/${profile_id}/`,
      {firstName: firstName,
        lastName: lastName,
        faculty: faculty,
        course: course,
        organization: organization}
    )
  }
}

