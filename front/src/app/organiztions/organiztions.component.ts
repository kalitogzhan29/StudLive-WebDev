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

  newDescription: string = '';
  newName: string = '';
  constructor(private orgService: OrganizationService) {}

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations() {
    this.orgService.getOrganizations().subscribe((data) =>
      this.organizations = data
    );
  }

  addOrganization(){
    this.orgService.createOrganization(this.newName, this.newDescription).subscribe((data) => {
      this.organizations.push(data)
      this.newName=''
      this.newDescription=''
    })
  }

  deleteOrganization(organization_id: number){
    this.orgService.deleteOrganization(organization_id).subscribe((organization) =>{
      this.organizations = this.organizations.filter((data) => organization.id !== organization_id);
    })
  }

  updateOrganization(organization_id: number){
    this.orgService.updateOrganization(organization_id, this.newName, this.newDescription).subscribe((data) => {
      this.organizations.forEach((data) =>{
          if (data.id == organization_id){
            data.name = this.newName
          }
        }
      );
      this.newName = ''
      this.newDescription=''
    })
  }

}
