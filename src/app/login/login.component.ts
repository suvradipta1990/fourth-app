import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {ngForm} from "@angular/forms";
export * from './login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }
 
    
   

    public userName :String = "";
    public password :String= "";




    login() : void {

      console.log("username :: "+this.userName);
      console.log("password :: "+this.password);
      if(this.userName == 'user' && this.password == '123'){

        // call back end for authorization

       this.router.navigate(["home"]);
      }else {
        alert("Invalid credentials");
      }
    }
 
  gethomepage(): void {
    this.router.navigate(['home']);
  }

  ngOnInit() {}
  ngOnDestroy() {}
}