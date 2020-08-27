import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../home/services/home.service";
import { LoginComponent } from '../login/login.component';
import { RegisterService } from "./services/register.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

export * from './register.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  
  public firstname :string = "";
  public lastname :string= "";
  public mobilenumber :string = "";
  public emailid :string= "";
  public password :string = "";
  public confirmpassword :string= "";
  public dateofbirth :string;
  public oldregnno :string= "";
  public regNo :string;
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
  public pincode :string="";
  public aadhaar :string="";
  

  public profilephoto: string="";
  public uploadedFiles: Array < File > ;
  public filetype : string="";
  public reciept_attached : boolean=false;

  private urlString: string = 'http://localhost:3000'; 

  dialog: any;

  constructor(private router: Router, 
     private registerService: RegisterService,
     private http: HttpClient
     // ,public dialogRef: MatDialogRef<RegisterComponent>
     ) { }

     ngOnInit() {

     }

  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
    this.reciept_attached=true;
  }

  register() : void {
    console.log("Date Of Birth");
    console.log(this.gender);
    if(this.firstname == null || this.firstname == "" || this.lastname == null || this.lastname == "" ||
     this.mobilenumber == null || this.mobilenumber == "" || this.emailid == null || this.emailid == "" ||
     this.password == null || this.password == "" || this.confirmpassword == null || this.confirmpassword == "" ){
      alert("Please fill all mandatory fields");
      if(!this.reciept_attached){
        alert("Kindly Attach Your Photo");     
      }
      this.router.navigate(["/register"]);
    }
    else{
      this.registerService.register(this.firstname, 
                                    this.lastname, 
                                    this.mobilenumber, 
                                    this.emailid, 
                                    this.password, 
                                    this.dateofbirth, 
                                    this.oldregnno, 
                                    this.confirmpassword,
                                    this.dateofjoin,
                                    this.gender,
                                    this.fathersnumber,
                                    this.mothersnumber,
                                    this.addresstype,
                                    this.addressline1,
                                    this.addressline2,
                                    this.district,
                                    this.city,
                                    this.pincode,
                                    this.aadhaar,
                                    this.subject,
                                    this.fathersname,
                                    this.mothersname,
                                    this.fathersoccupation,
                                    this.mothersoccupation)
      .subscribe((data) => {
        if(data != null && data.length>0) {  
          this.regNo=data[0].registration;
          console.log(this.regNo);
          //this.openDialog(data);
          alert(this.regNo);
          this.regNo=this.regNo.substring(this.regNo.lastIndexOf(":")+1)
          this.UploadProfilePhoto(this.regNo);
          this.router.navigate(["/"]);
        }else {
          alert("Registration Failed");
        }
      });
    }
  }

  UploadProfilePhoto(regnno:string){
    var filename: string=regnno;
    
   let formData = new FormData();
       for (var i = 0; i < this.uploadedFiles.length; i++) {
          var filetype=this.uploadedFiles[i].name;
          this.checkFileType(filetype);
          filename=filename+".jpg";
         //  alert(filename); 
           formData.append("uploads", this.uploadedFiles[i], filename);
        }
       this.http.post<any>(this.urlString + '/uploadProfilePic',formData)
           .subscribe((response: any) => {

               alert('Registered Sucessully,Your Registration No is: '+regnno);
               this.router.navigate(["/home"]);
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

  // openDialog(regnNo:string): void {
  //   const dialogRef = this.dialog.open( {
  //     width: '250px',
  //     data: {regnNo: regnNo,str:"Is your registration number"}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     this.router.navigate(["/"]);
  //   });
  //}

  //  onNoClick(): void {
  //    this.dialogRef.close();
  //  }

}
