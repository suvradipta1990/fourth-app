import { Component, OnInit } from '@angular/core';
import { ForgetPasswordService } from "./services/forget-password.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public regnno :string="";
  public answer :string="";
  public SecurityQues : string="";
  public result:boolean=false;

  public pwdrestres :string="";

  public password :string="";
  public cpassword :string="";
  
  constructor(private router: Router, 
    private forgetPasswordService: ForgetPasswordService) { }

  ngOnInit(): void {
  }

  validateforgetpwd() : void {
    this.forgetPasswordService.validateforgetpwd(this.regnno, this.SecurityQues,this.answer)
    .subscribe((data) => {
      if(data != null && data.length>0) {  
        this.result = data[0].forget_pwd_validation;
        console.log(this.result);
         if  (this.result==true){
          this.answer ="";
          alert("Validate Sucessfully")
         } 
         else{
          alert("Validation Failed")
           }
      }
    });
  }

  updatepassword() : void {

    if (this.password==this.cpassword){
          this.forgetPasswordService.updatepassword(this.regnno, this.password)
        .subscribe((data) => {
          if(data != null && data.length>0) {  
            this.pwdrestres = data[0].update_password;
            alert(this.pwdrestres);
            this.router.navigate(['/login']);
          }
        });
      }
      else{
        alert("Password and Confirm Password should Match");
        this.password="";
        this.cpassword="";
      }
    }
}
