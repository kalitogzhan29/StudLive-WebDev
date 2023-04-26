import { Component, OnInit } from '@angular/core';
import { Organization } from '../models';
import { OrganizationService } from '../service/organization/organization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  organizations: Organization[] = []
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
