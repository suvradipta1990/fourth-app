import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthService } from '../auth.service';
import { ProfileService } from "./services/home.service";
import {LoginService} from '../login/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data;
   username: string;
   userdtl: string;
   profiledtl: string;
   userid: string;
   userobj: string[];
  constructor(private router: Router,
    public authService: AuthService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('token');
    this.userid = localStorage.getItem('userdtl');
 //   this.userobj = JSON.parse(this.userdtl);
    this.getprofile();
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getprofile() : void {
  //  this.userid = this.userobj[0];
    console.log("inside getprofile "+ this.userid);
    this.profileService.getprofile(this.userid)
    .subscribe((data) => {
      if(data != null && data.length>0) {
        this.profiledtl=JSON.stringify(data);
        console.log(this.profiledtl);
       
       localStorage.setItem('isLoggedIn', "true");
    //   localStorage.setItem('token', this.userName);
   //    localStorage.setItem('userdtl', this.user);
   //     this.router.navigate(["home"]);
      }else {
        alert("Invalid credentials");
      }
    });
  }

}
