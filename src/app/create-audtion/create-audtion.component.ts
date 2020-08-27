import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../home/services/home.service";
import { LoginComponent } from '../login/login.component';
import { CreateAuditionService } from "./services/create-audition.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-audtion',
  templateUrl: './create-audtion.component.html',
  styleUrls: ['./create-audtion.component.css']
})
export class CreateAudtionComponent implements OnInit {

  public loggedInUser: string="";
  public user_id: string="";

  public audname :string = "AUD";
  public createaud_result :string;
  public dateofaud :Date;
  public subject :string="";
  public regfee : number=200;

  constructor(private router: Router, 
    private createAuditionService: CreateAuditionService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.user_id = localStorage.getItem('user_id');
  }

  createaudition() : void {
     if(this.audname == null || this.audname == "" || this.dateofaud == null ||
      this.subject == null || this.subject == ""){
        alert("Please fill all mandatory fields");
      }
      else{
            this.createAuditionService.createaudition(this.audname, 
                                                      this.dateofaud, 
                                                      this.subject,
                                                      this.regfee)
            .subscribe((data: string | any[]) => {
              if(data != null && data.length>0) {  
                this.createaud_result=data[0].create_audition;
                alert(this.createaud_result);
                this.ngOnInit();
                this.router.navigate(["/create-audition"]);
              }else {
                alert("Unable to connect  database ");
              }
            });
       }
  }

  datechange(element:any) {
   this.audname=this.audname+'-'+this.dateofaud;
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
