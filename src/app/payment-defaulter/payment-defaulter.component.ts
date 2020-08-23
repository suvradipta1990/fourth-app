import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthService } from '../auth.service';
import {PaymentDefaulterService} from './services/payment-defaulter.service';
import {PaymentSummary} from "../home/PaymentSummary";

@Component({
  selector: 'app-payment-defaulter',
  templateUrl: './payment-defaulter.component.html',
  styleUrls: ['./payment-defaulter.component.css']
})
export class PaymentDefaulterComponent implements OnInit {

  public loggedInUser :string="";
  public isadmin :string="false";
  public paymentSummary : PaymentSummary[];
  public count :number;
  public no_of_months :number=3;

  constructor(private router: Router,
              public authService: AuthService,
              public paymentDefaulterService: PaymentDefaulterService) { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('is_admin').toString();
    this.loggedInUser = localStorage.getItem('user_name');
    this.getallpaymentdefaulter(this.no_of_months);
  }

  getallpaymentdefaulter(no_of_months:number){
    this.paymentDefaulterService.getallpaymentdefaulter(no_of_months)
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallpendingreg');
         this.paymentSummary=data;
         this.count = this.paymentSummary.length;
          console.log(this.paymentSummary);
        }else {
          console.log(this.paymentSummary);
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

}
