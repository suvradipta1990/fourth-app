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
  public is_admin :string="";
  public delete_student :string="";
  public is_delete :boolean;
  constructor(private router: Router, 
    private forgetPasswordService: ForgetPasswordService) { }

  ngOnInit(): void {
    this.is_admin=localStorage.getItem('is_admin');
    this.delete_student=localStorage.getItem('delete_student');
    if  (this.is_admin=="true"){
      this.result =true;

     }
     if  (this.delete_student=="true"){
      this.is_delete =true;
     } 
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
            
            if  (this.is_admin=="true"){
              this.router.navigate(['/pendingapprovals']);
             } 
            else{
              this.router.navigate(['/login']);
            }
          }
        });
      }
      else{
        alert("Password and Confirm Password should Match");
        this.password="";
        this.cpassword="";
      }
    }

    deleteuser() : void {
            this.forgetPasswordService.deleteuser(this.regnno)
          .subscribe((data) => {
            if(data != null && data.length>0) {  
              this.pwdrestres = data[0].delete_user;
              alert(this.pwdrestres);
              
              if  (this.is_admin=="true"){
                this.router.navigate(['/pendingapprovals']);
               } 
              else{
                this.router.navigate(['/login']);
              }
            }
          });
      }
}
