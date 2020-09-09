import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourth-app';
  public loggedInUser :string="";
  public is_loggedIn :boolean=false;
  constructor(private titleService:Title) {
    this.titleService.setTitle("Lalitkala");
  }

  ngOnInit(): void {

    this.loggedInUser = localStorage.getItem('user_name');
    if (this.loggedInUser!=""){
       this.is_loggedIn=true;
    }
  }
}
 