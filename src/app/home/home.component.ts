import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileService } from "./services/home.service";
import {Profile} from "./Profile";
import {ProfileHistory} from "./ProfileHistory";
import {PaymentSummary} from "./PaymentSummary";
import {Address} from "./Address";
import { LoginComponent } from '../login/login.component';
import {AddhistoryService} from '../addhistory/services/addhistory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  static getprofile(user_id: string) {
    throw new Error("Method not implemented.");
  }
   
    username: string;
    public profile_id: string;
    user_id: string;
    is_admin: string;
    currDiv:number;


    public profiletab :string = "";
    public parentstab :string= "";
    public diffDays :any;
    public  profile: Profile;
    public  profilehist: ProfileHistory[];
    public  paysummary: PaymentSummary[];
    public  address :Address[];
    public myProfile :string="";
    public loggedInUser: string="";
    
    public teachername :string="";
    public pfromdate :string="";
    public ptilldate :string="";

    public newteachername :string="";
    public newpfromdate :string="";
    public newptilldate :string="";
    
    public addnew:boolean;
    public result: string;

  constructor(private router: Router,
    public authService: AuthService,
    private profileService: ProfileService,
    public addhistoryService: AddhistoryService) { }

  ngOnInit(): void {
    this.currDiv = 1;
    this.loggedInUser = localStorage.getItem('user_name');

    alert(localStorage.getItem('user_id'));

    this.username = localStorage.getItem('user_name');
    this.user_id = localStorage.getItem('user_id');
    this.is_admin = localStorage.getItem('is_admin'); 
    this.getprofile(this.user_id);
  }
  public getprofile(user_id: string) : void {
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
          data[0].date_of_birth,
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
          data[0].mother_occupation,
          data[0].gender,
          data[0].aadhaar_number,
          data[0].subject);
          
          this.myProfile = data[0].first_name;
          this.profile_id =data[0].profile_id;
          console.log("profile_id fetched:" +this.profile_id);
          localStorage.setItem('profile_id', this.profile_id);
          
          console.log("profile_id for profile history");
          console.log(this.profile_id);
          this.getProfileHistory(this.profile_id);
          this.getPaymentSummary(this.profile_id);
          this.getAddress(this.profile_id);
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

      getAddress(profile_id: string){
        this.profileService.getAddress(profile_id)
        .subscribe((data) => {
          if(data != null ) {
            console.log('getAddress');
             this.address=data;
              console.log(this.address);
            }else {
              console.log(this.address);
            }
          });
        }

      calculateDiff(from_date :Date,to_date:Date) {
        var date1:any = new Date(from_date);
        var date2:any = new Date(to_date);
        this.diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
        return this.diffDays;
    }

    editprofile(profile_id:number){
      this.router.navigate(["/editprofile"]);
    }

    edithist(profile_id:number){
      this.router.navigate(["/addhistory"]); 
    }

    uploadProfilePhoto(profile_id:number){
       this.router.navigate(["/update-profile-photo"]);
    }

  delete_histroy(history_id:number){
     var practisefrom:Date;
     var practisetill:Date;
     var is_lalitkala_teacher:boolean;
     const is_delete:number=1;
     this.addhistoryService.add_del_history(this.teachername,practisefrom,practisetill,
                                            is_lalitkala_teacher,is_delete,history_id,
                                            this.profile_id)
                .subscribe((data) => {
                  if(data != null ) {
                  console.log('update profile result');
                  this.result = data[0].add_del_history;
                  console.log(this.result);
                  alert(this.result); 
                  this.ngOnInit();
                  this.router.navigate(['/home']);
                  }
                  else {
                    console.log(this.result);
                    }
              });
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
export * from './home.component';