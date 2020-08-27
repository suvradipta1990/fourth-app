import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pendingapprovals',
  templateUrl: './pendingapprovals.component.html',
  styleUrls: ['./pendingapprovals.component.css']
})
export class PendingapprovalsComponent implements OnInit {

  public loggedInUser :string="";
  public isadmin :string="false";
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('is_admin').toString();
    this.loggedInUser = localStorage.getItem('user_name');
    if (this.isadmin!="true"){
      alert("You are not Authorized to view this page");
      this.router.navigate(["/home"]);
     }
     else{
      this.router.navigate(["/pendingapprovals"]);
     }

  }

  getappregpage(){
    this.router.navigate(["/approvereg"]);
  }

  getapppaymentpage(){
    this.router.navigate(["/approvepayment"]);
  }

  getpaymentdefaulter(){
    this.router.navigate(["/payment-defaulter"]);
  }

  createAudition(){
    this.router.navigate(["/create-audtion"]);
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
