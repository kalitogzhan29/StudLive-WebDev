import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Organization } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client:HttpClient) {
    
  }

  getOrganizations(): Observable<Organization[]>{
    return this.client.get<Organization[]>(`${this.BASE_URL}/api/organizations/`)
  }

}
