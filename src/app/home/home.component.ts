import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileService } from "./services/home.service";
import {Profile} from "./Profile";
import {ProfileHistory} from "./ProfileHistory";
//import { MatTabsModule } from '@angular/material/tabs';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
export * from './home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
   
  username: string;
   public profile_id: string;
   profiledtl: string;
   user_id: string;
   is_admin: string;
   userobj: string[];
   currDiv:number;
   profilediv:boolean;
   parentdiv:boolean;
   paymentdiv:boolean;
   historydiv:boolean;

    public profiletab :string = "";
    public parentstab :string= "";
    public  profile: Profile;
    public  profilehist: ProfileHistory[];
  constructor(private router: Router,
    public authService: AuthService,
    private profileService: ProfileService) { }


  ngOnInit(): void {
    this.currDiv = 1;

 alert(localStorage.getItem('user_id'));

    this.username = localStorage.getItem('user_name');
    this.user_id = localStorage.getItem('user_id');
    this.is_admin = localStorage.getItem('is_admin'); 
    this.getprofile(this.user_id);
    console.log("profile_id");
    //this.profile_id=localStorage.getItem('profile_id');
    console.log(this.profile);
    this.getProfileHistory(this.profile_id);
  }
  getprofile(user_id: string) : void {
  
    console.log("inside getprofile "+ user_id);
    this.profileService.getprofile(user_id)
    .subscribe((data) => {
      if(data != null && data.length>0) {
        this.profile = new Profile(data[0].profile_id,
          data[0].regn_no,
          data[0].reg_no_old,
          data[0].student_photo,
          data[0].first_name,
          data[0].middle_name,
          data[0].last_name,
          data[0].date_of_birth.substring(0, 10),
          data[0].age,
          data[0].fees,
          data[0].discounted_fees,
          data[0].mobile_number,
          data[0].contact_number,
          data[0].fathers_name,
          data[0].fathers_conact_number,
          data[0].mothers_name,
          data[0].mothers_number,
          data[0].created_date,
          data[0].created_by,
          data[0].updated_date,
          data[0].updated_by,
          data[0].is_deleted,
          data[0].user_id,
          data[0].email);
          this.profile_id =data[0].profile_id;
          console.log("profile_id fetched:" +this.profile_id);
         // localStorage.setItem('profile_id', this.profile_id);

      }else {
        alert("Profile not found"); 
      }
    });
  }

  getProfileHistory(profile_id: string){
    this.profileService.getProfileHistory(profile_id)
    .subscribe((data) => {
      if(data != null ) {
        console.log('profile_history_count');
         this.profilehist=data;
          console.log(this.profilehist);
        //  localStorage.setItem('isLoggedIn', "true");
        }else {
          console.log(this.profilehist);
        }
      });
    }
    logout(){
      localStorage.setItem('isLoggedIn', "false");
      localStorage.removeItem('user_id');
      localStorage.removeItem('profile_id');
      this.router.navigate(["/login"]);
    }
}
