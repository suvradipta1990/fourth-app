import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApprovepaymentService } from "./services/approvepayment.service";
import {Approvepayment} from './approvepayment';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-approvepayment',
  templateUrl: './approvepayment.component.html',
  styleUrls: ['./approvepayment.component.css']
})
export class ApprovepaymentComponent implements OnInit {
 
  public  pendingpayment: Approvepayment[];
  public loggedInUser: string="";
  public count :number;
  public result :string;
  public remakrs :string="";
  public feeRecieptRootDir ="assets/images/fees_transaction_image/";
  public profilePicPath:string="assets/images/profile_image/";
  
  constructor(private router: Router,
    public authService: AuthService,
    private approvepaymentService: ApprovepaymentService) { }

  ngOnInit(): void {

    this.loggedInUser = localStorage.getItem('user_name');
    this.getallpendingpayment();
    this.remakrs="";
  }

  getallpendingpayment(){
    this.approvepaymentService.getallpendingpayment()
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallpendingpayment');
         this.pendingpayment=data;
         this.count = this.pendingpayment.length;
          console.log(this.pendingpayment);
        }else {
          console.log(this.pendingpayment);
        }
      });
    }

    approve_payment(p_id:number){
      const is_approve=1;
      this.approvepaymentService.approve_rej_payment(is_approve,p_id,null)
      .subscribe((data) => {
        if(data != null ) {
          console.log('approve_rej_payment');
          this.result=data[0].approve_reject_payment;
            console.log(this.result);
            alert(this.result);
            this.ngOnInit();
            this.router.navigate(["/approvepayment"]);
          }else {
            console.log(this.result);
          }
        });
      }

      reject_payment(p_id:number){
        const is_approve=0;
        if (this.remakrs.length<=1){
          alert("Please provide Valid reason for Rejecting")
        }
        else{
            this.approvepaymentService.approve_rej_payment(is_approve,p_id,this.remakrs)
            .subscribe((data) => {
              if(data != null ) {
                console.log('approve_rej_payment');
                this.result=data[0].approve_decline_payment;
                  console.log(this.result);
                  alert(this.result);
                  this.ngOnInit();
                  this.router.navigate(["/approvepayment"]);
                }else {
                  console.log(this.result);
                }
              });
        }
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
