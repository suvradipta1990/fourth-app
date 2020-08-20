import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileService } from "./services/home.service";
import {Profile} from "./Profile";
import {ProfileHistory} from "./ProfileHistory";
import {PaymentSummary} from "./PaymentSummary";
import { LoginComponent } from '../login/login.component';
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
    public diffDays :any;
    public  profile: Profile;
    public  profilehist: ProfileHistory[];
    public  paysummary: PaymentSummary[];
    public myProfile :string="";
    public loggedInUser: string="";
    prof_id: string;
  constructor(private router: Router,
    public authService: AuthService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.currDiv = 1;
    this.loggedInUser = localStorage.getItem('user_name');

 alert(localStorage.getItem('user_id'));

    this.username = localStorage.getItem('user_name');
    this.user_id = localStorage.getItem('user_id');
    this.is_admin = localStorage.getItem('is_admin'); 
    this.getprofile(this.user_id);
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
          data[0].fathers_contact_no,
          data[0].mothers_name,
          data[0].mothers_contact_no,
          data[0].created_date,
          data[0].created_by,
          data[0].updated_date,
          data[0].updated_by,
          data[0].is_deleted,
          data[0].user_id,
          data[0].email,
          data[0].doj,
          data[0].is_student,
          data[0].father_occupation,
          data[0].mother_occupation);
          
          this.myProfile = data[0].first_name;
          this.profile_id =data[0].profile_id;
          console.log("profile_id fetched:" +this.profile_id);
          localStorage.setItem('first_name',this.myProfile);
          
          console.log("profile_id for profile history");
          console.log(this.profile_id);
          this.getProfileHistory(this.profile_id);
          this.getPaymentSummary(this.profile_id);
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
        }else {
          console.log(this.profilehist);
        }
      });
    }

    getPaymentSummary(profile_id: string){
      this.profileService.getPaymentSummary(profile_id)
      .subscribe((data) => {
        if(data != null ) {
          console.log('paysummary_count');
           this.paysummary=data;
            console.log(this.paysummary);
          }else {
            console.log(this.paysummary);
          }
        });
      }

      calculateDiff(from_date :Date,to_date:Date) {
        var date1:any = new Date(from_date);
        var date2:any = new Date(to_date);
        this.diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
        return this.diffDays;
    }

    logout(){
      localStorage.setItem('isLoggedIn', "false");
      localStorage.removeItem('user_id');
      localStorage.removeItem('profile_id');
      localStorage.clear();
      this.router.navigate(["/"]);
      LoginComponent.logout();
    }

}
