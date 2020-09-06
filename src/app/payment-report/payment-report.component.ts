import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PaymentReportService } from "./services/payment-report.service";
import { LoginComponent } from '../login/login.component';
import { StudentPaymentHistoryComponent } from '../student-payment-history/student-payment-history.component';
import { StudentPaymentView } from '../student-payment-history/StudentPaymentView';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {
  
  public  studentPaymentView: StudentPaymentView[];
  public loggedInUser: string="";
  public count :number;
  public result :string;
  public remakrs :string="";
  public startdate :Date;
  public enddate :Date;

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
  }

  getpaymentreport(){
      //
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
