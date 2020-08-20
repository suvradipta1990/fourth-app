import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../home/services/home.service";
import { LoginComponent } from '../login/login.component';
import { RegisterService } from "./services/register.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
  dialog: any;

  constructor(private router: Router, 
     private registerService: RegisterService
     // ,public dialogRef: MatDialogRef<RegisterComponent>
     ) { }
  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/"]);
    LoginComponent.logout();
  }

  register() : void {
    console.log("Date Of Birth");
    console.log(this.dateofbirth);
    if(this.firstname == null || this.firstname == "" || this.lastname == null || this.lastname == "" ||
     this.mobilenumber == null || this.mobilenumber == "" || this.emailid == null || this.emailid == "" ||
     this.password == null || this.password == "" || this.confirmpassword == null || this.confirmpassword == "" ){
      alert("Please fill all mandatory fields");
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
                                    this.gender)
      .subscribe((data) => {
        if(data != null && data.length>0) {  
          this.regNo=data[0].registration;
          console.log(this.regNo);
          //this.openDialog(data);
          alert(this.regNo);
          this.router.navigate(["/"]);
        }else {
          alert("Registration Failed");
        }
      });
    }
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
