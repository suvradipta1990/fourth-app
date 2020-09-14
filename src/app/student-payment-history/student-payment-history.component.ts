import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StudentPaymentHistoryService } from "./services/student-payment-history.service";
import { LoginComponent } from '../login/login.component';
import {StudentPaymentView} from './StudentPaymentView';
@Component({
  selector: 'app-student-payment-history',
  templateUrl: './student-payment-history.component.html',
  styleUrls: ['./student-payment-history.component.css']
})
export class StudentPaymentHistoryComponent implements OnInit {

  public loggedInUser :string="";
  public isadmin :string="false";
  public count :number=0;
  public  studentPaymentView: StudentPaymentView[];
  public result :string;
  public startdate :Date;
  public enddate :Date;
  public feeRecieptRootDir ="assets/images/fees_transaction_image/";

  constructor(private router: Router,
              public authService: AuthService,
              public studentPaymentHistoryService : StudentPaymentHistoryService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.getallpayment(this.startdate,this.enddate,this.loggedInUser);
  }

  getallpayment(startdate :Date,enddate :Date,regno :string){
    this.studentPaymentHistoryService.getallpayment(startdate,enddate,regno)
    .subscribe((data) => {
      if(data != null ) {
        console.log('studentPaymentView');
         this.studentPaymentView=data;
         this.count = this.studentPaymentView.length;
          console.log(this.studentPaymentView);
        }else {
          console.log(this.studentPaymentView);
        }
      });
    }

    getpaymentreport(){
      console.log(this.startdate);
      console.log(this.enddate);
      console.log(this.loggedInUser);
      this.studentPaymentHistoryService.getallpayment(this.startdate,this.enddate,this.loggedInUser)
      .subscribe((data) => {
        if(data != null ) {
          console.log('getallpendingpayment');
           this.studentPaymentView=data;
           this.count = this.studentPaymentView.length;
            console.log(this.studentPaymentView);
          }else {
            console.log(this.studentPaymentView);
          }
        });
      }

    gotohome(){
      this.router.navigate(["/home"]);
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
