import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
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

  createOrganization(name: string, description: string): Observable<Organization>{
    return this.client.post<Organization>(
      `${this.BASE_URL}/api/organizations/`,
      {name: name,
      description: description}
    )
  }

  deleteOrganization(organization_id: number): Observable<any>{
    return this.client.delete<any>(
      `${this.BASE_URL}/api/organizations/${organization_id}/`
    )
  }
  
  updateOrganization(organization_id: number, name: string, description: string): Observable<Organization>{
    return this.client.put<Organization>(
      `${this.BASE_URL}/api/organizations/${organization_id}/`,
      {name: name,
      description: description}
    )
  }
}
