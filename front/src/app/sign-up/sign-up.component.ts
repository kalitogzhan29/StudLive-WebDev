import { Component, OnInit } from '@angular/core';
import { Organization } from '../models';
import { OrganizationService } from '../service/organization/organization.service';
import { Faculty } from '../models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  organizations: Organization[] = []
  lastName:string='';
  firstName:string='';
  email:string='';
  password:string='';
  faculty:string='';
  organization:string='';


  // faculties: 

  constructor(private orgService: OrganizationService) {}

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations() {
    this.orgService.getOrganizations().subscribe(data => {
      this.organizations = data;
    })
  }

  
}
