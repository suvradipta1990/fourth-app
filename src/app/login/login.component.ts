import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
export * from './login.component';
import { LoginService } from "./services/login.service";
import {User} from "./user";
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user_id: string;
  is_admin: string;
  constructor(private router: Router, 
             private loginService: LoginService) {   }
   user:User;

    public userName :string = "";
    public password :string= "";
   // public user:string;
    login() : void {
      this.loginService.login(this.userName, this.password)
      .subscribe((data) => {
        if(data != null && data.length>0) {
       //   console.log(data[0].user_id);    

          this.user = new User(data[0].user_id,
                       data[0].username,
                       data[0].password,
                       data[0].is_admin,
                       data[0].created_date,
                       data[0].created_by,
                       data[0].updated_date,
                       data[0].updated_by,
                       data[0].is_deleted);
        console.log("this.user");
        console.log(this.user);
         localStorage.setItem('isLoggedIn', "true");
         localStorage.setItem('user_id', this.user.user_id.toString());
         localStorage.setItem('user_name', this.userName);

          this.router.navigate(["home"]);
        }else {
          alert("Invalid credentials");
        }
      });
    }
 
  gethomepage(): void {
    this.router.navigate(['home']);
  }

  ngOnInit() {}
  ngOnDestroy() {}
}