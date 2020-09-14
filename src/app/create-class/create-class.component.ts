import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import {CreateClassService} from './services/create-class.service';
import { Time } from '@angular/common';

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


  constructor(private router: Router,
    public authService: AuthService,
    private createClassService: CreateClassService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
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
    // to do
  }
}
