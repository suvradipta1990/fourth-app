import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from "../home/services/home.service";
import { LoginComponent } from '../login/login.component';

export * from './register.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private router: Router) { }
  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/"]);
    LoginComponent.logout();
  }

}
