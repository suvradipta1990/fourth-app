import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PaymentReportService } from "./services/payment-report.service";
import { LoginComponent } from '../login/login.component';
import { StudentPaymentHistoryComponent } from '../student-payment-history/student-payment-history.component';
import { StudentPaymentView } from '../student-payment-history/StudentPaymentView';
import {PaymentSummary} from "../home/PaymentSummary";

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {
  
  public  studentPaymentView: StudentPaymentView[];
  public  paysummary: PaymentSummary[];
  public loggedInUser: string="";
  public count :number;
  public result :string;
  public remakrs :string="";
  public startdate :Date;
  public enddate :Date;

  columnDefs = [
    {headerName: 'Name', field: 'first_name' },
    {headerName: 'Regn No', field: 'regn_no' },
    {headerName: 'Payment Date', field: 'payment_date' },
    {headerName: 'Amount Paid', field: 'pay_amount' },
    {headerName: 'From', field: 'pay_month_from' },
    {headerName: 'Till', field: 'pay_month_to' },
];

  constructor(private router: Router,
              public authService: AuthService,
              public paymentReportService :PaymentReportService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
  }

  getpaymentreport(){
    this.paymentReportService.getpaymentreport(this.startdate,this.enddate)
    .subscribe((data) => {
      if(data != null ) {
        console.log('paysummary_count');
         this.paysummary=data;
          console.log(this.paysummary);
        }else {
          console.log(this.paysummary);
        }
      });
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

}
