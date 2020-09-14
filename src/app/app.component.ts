import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AuthService } from './auth.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourth-app';
  public loggedInUser :string="";
  public is_loggedIn :string="false";
  public sidebar :string="";

  constructor(private titleService:Title,
              private router: Router) {
    this.titleService.setTitle("Lalitkala");
  }

//   changeSuit(element:any) {
//     this.router.navigate(["/"+this.dropdownval]);
// }

  ngOnInit(): void {

    this.is_loggedIn = localStorage.getItem('isLoggedIn');
  }

  login(): void{
    this.is_loggedIn = localStorage.getItem('isLoggedIn');
  }

  openNav(){
    if(this.sidebar){
    this.sidebar="true";
  }
  else{
    this.sidebar="false";
  }
    localStorage.setItem('login',this.sidebar);
  }

  closeNav(){
    this.sidebar="false";
  }

  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/dashboard"]);
    LoginComponent.logout();
  }
}
 
export * from './app.component';