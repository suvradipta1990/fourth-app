import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public firstname :string="";
  public lastname :string="";
  public mobileno :string="";
  public regno :string="";
  public loggedInUser :string="";
  public isadmin :string="false";
  constructor(private router: Router,public authService: AuthService)  { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('is_admin').toString();
    this.loggedInUser = localStorage.getItem('user_name');
    if (this.isadmin!="true"){
      alert("You are not Authorized to view this page");
      this.router.navigate(["/home"]);
    }
  }

  searchstudent(){
    // to do
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
