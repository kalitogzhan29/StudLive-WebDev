import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../service/organization/organization.service';
import { Organization } from '../models';

@Component({
  selector: 'app-organiztions',
  templateUrl: './organiztions.component.html',
  styleUrls: ['./organiztions.component.css'],
})
export class OrganiztionsComponent implements OnInit{
  organizations: Organization[] = []

  constructor(private orgService: OrganizationService) {}

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations() {
    this.orgService.getOrganizations().subscribe((data) =>
      this.organizations = data
    );
  }
}
