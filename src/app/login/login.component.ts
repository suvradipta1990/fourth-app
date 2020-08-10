import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
export * from './login.component';
import { LoginService } from "./services/login.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hello: string;
  userobj: LoginService[];
  constructor(private router: Router,
    private loginService: LoginService) {
    this.hello = 'Suvra';
   }
  //constructor(private apiService: ApiService){ }
 
    public userName :string = "";
    public password :string= "";
    public user:string;
    login() : void {
      this.loginService.login(this.userName, this.password)
      .subscribe((data) => {
        if(data != null && data.length>0) {
          this.user=JSON.stringify(data);
          console.log("this.user value");
          console.log(this.user);
          this.userobj = JSON.parse(this.user);
        //  const userobj: any[]  =Array.of(this.user);
          console.log("converting string to object");
          console.log(this.userobj.values);
         
         localStorage.setItem('isLoggedIn', "true");
         localStorage.setItem('token', this.userName);
         localStorage.setItem('userdtl', this.user);
          this.router.navigate(["home"]);
        }else {
          alert("Invalid credentials");
        }
      });
    }
 
  gethomepage(): void {
    this.router.navigate(['home']);
  }

  clickMe() {
this.loginService.clickme().subscribe((data) => {
  if(data != null) {
    this.hello = JSON.stringify(data);
  }
});
  }

  ngOnInit() {}
  ngOnDestroy() {}
}