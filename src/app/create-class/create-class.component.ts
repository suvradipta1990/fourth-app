import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import {CreateClassService} from './services/create-class.service';
import { Time } from '@angular/common';
import { PaymentService } from "../createpayment/services/payment.service";
import { Teachers } from '../teachers/teachers';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  public loggedInUser: string="";
  public teacher: string="";
  public subject: string="";
  public dow: string="";
  public stime: Time;
  public etime: Time;
  public teachers :Teachers[];
  public result :string="";

  constructor(private router: Router,
    public authService: AuthService,
    private createClassService: CreateClassService,
    private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.getallteachers();
  }

  getallteachers(){
    this.paymentService.getallteachers()
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallteachers for fees book');
         this.teachers=data;
         console.log(this.teachers);
        }else {
          console.log(this.teachers);
        }
      });
    }

    onTeacherChange(value :string) {
      this.teacher = value;
      alert(this.teacher);
   }

  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/"]);
    LoginComponent.logout();
  }

  back(){
    this.router.navigate(["/pendingapprovals"]);
  }

  createclass(){
    this.createClassService.createclass(this.teacher,
                                        this.subject,
                                        this.dow,
                                        this.stime,
                                        this.etime)
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallteachers for fees book');
         this.result=data[0].create_class;
         alert(this.result);
        }else {
          console.log(this.teachers);
        }
      });
  }
}
