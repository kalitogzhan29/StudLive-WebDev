import { Component } from '@angular/core';
import { ProfileService } from '../service/profile/profile.service';
import { Profile } from '../models';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  profile: Profile[] = []
  lastName:string='';
  firstName:string='';
  faculty:string='';
  organization:string='';

  constructor(private profileService:ProfileService){}
  getProfile() {
    this.profileService.getProfile().subscribe((data) =>
      this.profile = data
    );
  }
  

}
