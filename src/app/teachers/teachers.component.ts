import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import {TeachersService} from './services/teachers.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public loggedInUser: string="";

  public firstname :string = "";
  public speciality :string= "";
  public mobilenumber :string = "";
  public emailid :string= "";
  public dateofbirth :Date;

  public addresstype :string="";
  public country :string="";
  public addressline1 :string="";
  public addressline2 :string="";
  public district :string="";
  public city :string="";
  public pincode :number=null;
  public gender :string="";
  public subject :string="";

  public profilephoto: string="";
  public uploadedFiles: Array < File > ;
  public filetype : string="";
  public reciept_attached : boolean=false;
  public create_student :string="";
  public result :string="";
  public teacher_id :string="";

  private urlString: string = 'http://192.168.0.14:3000';

  constructor(private router: Router,
              public authService: AuthService,
              private teachersService: TeachersService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
  }

  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
    this.reciept_attached=true;
  }

  back(){
    this.router.navigate(["/pendingapprovals"]);
  }

  createteacher(){
    console.log("Date Of Birth");
    console.log(this.gender);
    if(this.firstname == null || this.firstname == "" || this.mobilenumber == null || this.mobilenumber == "" ){
      alert("Please fill all mandatory fields");
      if(!this.reciept_attached){
        alert("Kindly Attach Your Photo");     
      }
      this.router.navigate(["/teachers"]);
    }
    else{
      this.teachersService.createteacher(this.firstname, 
                                        this.speciality, 
                                        this.mobilenumber, 
                                        this.emailid, 
                                        this.dateofbirth, 
                                        this.gender,
                                        this.addressline1,
                                        this.addressline2,
                                        this.district,
                                        this.city,
                                        this.pincode,
                                        this.subject)
      .subscribe((data) => {
        if(data != null && data.length>0) {  
          this.result=data[0].create_teacher;
          this.teacher_id=this.result.substring(this.result.lastIndexOf(":")+1)
          this.UploadProfilePhoto(this.teacher_id);
        alert(this.result);
        }else {
          alert("Teacher Registration Failed");
        }
      });
    }
  }

  UploadProfilePhoto(regnno:string){
    var filename: string=regnno;
    
   let formData = new FormData();
       for (var i = 0; i < this.uploadedFiles.length; i++) {
          var filetype=this.uploadedFiles[i].name;
          filename=filename+".jpg"; 
           formData.append("uploads", this.uploadedFiles[i], filename);
        }
       this.http.post<any>(this.urlString + '/uploadTeacherPic',formData)
           .subscribe((response: any) => {

               alert('Registered Sucessully,Your Registration No is: '+regnno);
               this.router.navigate(["/home"]);
           })
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
