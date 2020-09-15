import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import {AddhistoryService} from '../addhistory/services/addhistory.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-class-mapping',
  templateUrl: './class-mapping.component.html',
  styleUrls: ['./class-mapping.component.css']
})
export class ClassMappingComponent implements OnInit {

  public loggedInUser: string="";

  constructor(private router: Router,
    public authService: AuthService,
    public addhistoryService: AddhistoryService) { }

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

}
