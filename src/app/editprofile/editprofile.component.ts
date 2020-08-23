import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EditprofileService } from "./services/editprofile.service";
import {Profile} from "../home/Profile";
import {Address} from "../home/Address";
import { LoginComponent } from '../login/login.component';
import { ProfileService } from '../home/services/home.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public loggedInUser: string="";
  public user_id: string="";

  public firstname :string = "";
  public lastname :string= "";
  public mobilenumber :string = "";
  public emailid :string= "";
  public password :string = "";
  public confirmpassword :string= "";
  public dateofbirth :Date;
  public oldregnno :string= "";
  public regno :string;
  public dateofjoin :string="";
  public gender :string="";
  public subject :string="";

  public fathersname :string="";
  public fathersoccupation :string="";
  public mothersname :string="";
  public mothersoccupation :string="";
  public fathersnumber :string="";
  public mothersnumber :string="";

  public addresstype :string="";
  public country :string="";
  public addressline1 :string="";
  public addressline2 :string="";
  public district :string="";
  public city :string="";
  public pincode :number;
  public aadhaar :string="";
  public middlename :string="";
  public address_type :string="";

  public profile_id: string="";
  public  profile: Profile;
  public  address :Address[];
  public result :string;


  constructor(private router: Router,
              public authService: AuthService,
              public editprofileService: EditprofileService,
              public profileService:ProfileService ) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.user_id = localStorage.getItem('user_id');
    this.getprofile(this.user_id);
  }

  public getprofile(user_id: string) : void {
    console.log("inside getprofile "+ user_id);
    this.profileService.getprofile(user_id)
    .subscribe((data) => {
      if(data != null && data.length>0) {
        //this.profile = new Profile();
          
          this.profile_id = data[0].profile_id;
          this.regno = data[0].regn_no;
          this.oldregnno = data[0].reg_no_old;
          this.oldregnno = data[0].student_photo;
          this.firstname = data[0].first_name;
          this.middlename = data[0].middle_name;
          this.lastname = data[0].last_name;
          this.dateofbirth = data[0].date_of_birth.substring(0, 10);
          this.mobilenumber = data[0].mobile_number;
          this.fathersname = data[0].fathers_name;
          this.fathersnumber = data[0].fathers_contact_no;
          this.mothersname = data[0].mothers_name;
          this.mothersnumber = data[0].mothers_contact_no;
          this.emailid = data[0].email;
          this.dateofjoin = data[0].doj;
          this.fathersoccupation = data[0].father_occupation;
          this.mothersoccupation = data[0].mother_occupation;
          this.gender = data[0].gender;
          this.aadhaar = data[0].aadhaar_number;
          this.subject = data[0].subject;
     
          console.log("profile_id fetched:" +this.profile_id);
          localStorage.setItem('profile_id', this.profile_id);
          
          console.log("profile_id for update");
          console.log(data[0].aadhaar_number);
          this.getAddress(this.profile_id);
      }else {
        alert("Profile not found"); 
      }
    });
  }

  getAddress(profile_id: string){
    this.profileService.getAddress(profile_id)
    .subscribe((data) => {
      if(data != null ) {
        console.log('getAddress');
         this.address = data;
          this.country = this.address[0].country;
          this.addressline1 = this.address[0].adddress_line_1;
          this.addressline2 = this.address[0].adddress_line_2;
          this.district = this.address[0].district;
          this.city = this.address[0].city;
          this.pincode = this.address[0].pincode;
          this.address_type = this.address[0].address_type;

          console.log(this.address);
        }else {
          console.log(this.address);
        }
      });
    }

    updateProfile(){

          this.editprofileService.updateProfile(this.profile_id,this.regno,this.oldregnno,
            this.firstname,this.middlename,this.lastname,this.dateofbirth,
            this.mobilenumber,
            this.fathersname,this.fathersnumber,
            this. mothersname,this.mothersnumber,
            this.emailid,this.dateofjoin,
            this.fathersoccupation,this.mothersoccupation,
            this.gender,this.aadhaar,this.subject,
            this.country,this.addressline1,this.addressline2,
            this.district,this.city,this.pincode,this.address_type)
          .subscribe((data) => {
          if(data != null ) {
          console.log('update profile result');
          this.result = data[0].update_profile;
          console.log(this.result);
          alert(this.result); 
          this.router.navigate(['/home']);
          }else {
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

    cancel(){
      this.router.navigate(["/home"]);
    }
  

}
