import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../service/profile/profile.service';
import { Profile } from '../models';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: Profile[] = []

  constructor(private profileService:ProfileService){}
  getOrganizations() {
    this.profileService.getProfile().subscribe((data) =>
      this.profile = data
    );
  }
}
