import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../home/services/home.service";
import { LoginComponent } from '../login/login.component';
import { PreAuditionRegistrationService } from "./services/pre-audition-registration.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import {UpcommingAuditionsComponent} from "../upcomming-auditions/upcomming-auditions.component";

@Component({
  selector: 'app-pre-audition-registration',
  templateUrl: './pre-audition-registration.component.html',
  styleUrls: ['./pre-audition-registration.component.css']
})
export class PreAuditionRegistrationComponent implements OnInit {

  public audition_id :string;
  public audition_name :string;
  public firstname :string = "";  
  public emailid :string= "";       
  public mobilenumber :string = "";   
  public altmobilenumber :string= "";   
  public aadhaar :string="";             
  public dateofbirth :Date;              
  public gender :string="";

  public addresstype :string="";
  public country :string="";
  public addressline1 :string="";
  public addressline2 :string="";
  public district :string="";
  public city :string="";
  public pincode :string="";

  public subject :string="";

  public fathersname :string="";
  public fathersoccupation :string="";
  public fathersnumber :string="";
  public mothersname :string="";
  public mothersoccupation :string="";
  public mothersnumber :string="";

  public totalyrstrainning :string = "";

  public teacher1 :string = "";
  public sdate1 :Date;
  public edate1 :Date;

  public teacher2 :string = "";
  public sdate2 :Date;
  public edate2 :Date;

  public teacher3 :string = "";
  public sdate3 :Date;
  public edate3 :Date;

  public certification :string= "";
  public fammusic :string= "";
  public membername :string= "";

  public musicinstrument :string= "";
  public refperson :string= "";
  
  public regNo :string="";

  public profilephoto: string="";
  public transactionslip: string="";
  public uploadedFiles: Array < File > ;
  public uploadedFeereciept: Array < File > ;
  public filetype : string="";

  public reciept_attached : boolean=false;
  public photo_attached :boolean=false;

  private urlString: string = 'http://localhost:3000'; 

  constructor(private router: Router, 
    private preAuditionRegistrationService: PreAuditionRegistrationService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.audition_id=localStorage.getItem('audition_id');
    console.log("Audition ID is :"+this.audition_id);
    this.audition_name=localStorage.getItem('audition_name');
  }

  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
    this.photo_attached=true;
  }

  feeslipChange(element:any) {
    this.uploadedFeereciept = element.target.files;
    this.reciept_attached=true;
  }


  audRegister() : void {
    console.log("Date Of Birth");
    console.log(this.gender);
    if(this.firstname == null || this.firstname == "" || this.addressline1 == null || this.addressline1 == "" ||
     this.mobilenumber == null || this.mobilenumber == "" || this.emailid == null || this.emailid == "" ||
     this.totalyrstrainning == null || this.totalyrstrainning == "" || this.addressline1 == null || this.addressline1 == "" ){
      alert("Please fill all mandatory fields");
      if((!this.reciept_attached) ||(!this.photo_attached)){
        alert("Kindly Attach Your Photo and Fee Receipt");     
      }
      if(this.dateofbirth > this.sdate1 || this.dateofbirth > this.edate1 ||
        this.dateofbirth > this.sdate2 || this.dateofbirth > this.edate2 ||
        this.dateofbirth > this.sdate3 || this.dateofbirth > this.edate3 ||
        this.sdate1 > this.edate1 || this.sdate2 > this.edate2 ||
        this.sdate3 > this.edate3){
        alert("Kindly Check All the dates");     
      }
      this.router.navigate(["/pre-audition-registration"]);
    }
    else{
      this.preAuditionRegistrationService.audRegister(this.audition_id, 
                                                        this.firstname, 
                                                        this.emailid, 
                                                        this.mobilenumber, 
                                                        this.altmobilenumber, 
                                                        this.aadhaar, 
                                                        this.dateofbirth, 
                                                        this.gender,
                                                        this.addresstype,
                                                        this.addressline1,
                                                        this.addressline2,
                                                        this.district,
                                                        this.city,
                                                        this.pincode,
                                                        this.subject,
                                                        this.fathersname,
                                                        this.fathersoccupation,
                                                        this.fathersnumber,
                                                        this.mothersname,
                                                        this.mothersoccupation,
                                                        this.mothersnumber,
                                                        this.totalyrstrainning, 
                                                        this.teacher1, 
                                                        this.sdate1, 
                                                        this.edate1, 
                                                        this.teacher2, 
                                                        this.sdate2, 
                                                        this.edate2,
                                                        this.teacher3, 
                                                        this.sdate3, 
                                                        this.edate3,
                                                        this.certification,
                                                        this.fammusic,
                                                        this.membername,
                                                        this.musicinstrument,
                                                        this.refperson)
                          .subscribe((data) => {
                            if(data != null && data.length>0) {  
                              this.regNo=data[0].aud_registration;
                              console.log(this.regNo);

                              alert(this.regNo);
                              alert(this.regNo.lastIndexOf("#"))
                              if(this.regNo.lastIndexOf("#")>0){
                                 this.regNo=this.regNo.substring(this.regNo.lastIndexOf("#")+1)
                                 this.UploadProfilePhoto(this.regNo);
                                 this.UploadRegFeeReciept(this.regNo);
                              }
                            }else {
                              alert("Registration Failed");
                            }
                          });
                        }
  }

  UploadProfilePhoto(regnno:string){
    var filename: string="AUDITION-DP-"+regnno;
    
   let formData = new FormData();
       for (var i = 0; i < this.uploadedFiles.length; i++) {
          var filetype=this.uploadedFiles[i].name;
          this.checkFileType(filetype);
          filename=filename+".jpg";
           formData.append("uploads", this.uploadedFiles[i], filename);
        }
       this.http.post<any>(this.urlString + '/uploadRegPic',formData)
           .subscribe((response: any) => {

               alert('Registered Sucessully,Your Registration No is: '+regnno);
           })
 }

 UploadRegFeeReciept(regnno:string){
  var filename: string="AUDITION-FEE-"+regnno;
  
 let formData = new FormData();
     for (var i = 0; i < this.uploadedFeereciept.length; i++) {
        var filetype=this.uploadedFeereciept[i].name;
        this.checkFileType(filetype);
        filename=filename+".jpg";
         formData.append("uploads", this.uploadedFeereciept[i], filename);
      }
     this.http.post<any>(this.urlString + '/uploadRegPic',formData)
         .subscribe((response: any) => {

             alert('Registered Sucessully,Your Registration No is: '+regnno);
         })
}

 checkFileType(filetype :string) : any{ 
  alert ("File Name Recieve: "+filetype);
    this.filetype=filetype.substring(filetype.lastIndexOf("."))
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
