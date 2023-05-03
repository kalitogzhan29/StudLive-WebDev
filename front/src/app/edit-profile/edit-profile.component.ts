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
  newName: string = '';
  newLastName: string = '';
  newCourse: number=0;
  newFaculty:string = '';
  newOrganization:string = '';

  constructor(private profileService:ProfileService){}
  getProfile() {
    this.profileService.getProfile().subscribe((data) =>
      this.profile = data
    );
  }
  // saveData(){

  //   this.profileService.updateProfile(
  //                                 this.newName,
  //                                 this.newLastName,
  //                                  this.newCourse,
  //                                  this.newFaculty,
  //                                  this.newCourse,
  //                                  this.newOrganization).subscribe((data) => {
  //     this.profile.forEach((data) =>{
  //         if (data.id == organization_id){
  //           data.title = this.newTitle
  //         }
  //       }
  //     );
  //     this.newTitle = ''
  //     this.newDescription=''

  //   })
  // }

}
