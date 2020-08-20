import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApproveregService } from "./services/approvereg.service";
import {Approvereg} from './approvereg';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-approvereg',
  templateUrl: './approvereg.component.html',
  styleUrls: ['./approvereg.component.css']
})
export class ApproveregComponent implements OnInit {
  
  public  pendingreg: Approvereg[];
  public loggedInUser: string="";
  public count :number;
  constructor(private router: Router,
    public authService: AuthService,
    private approveregService: ApproveregService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.getallpendingreg();
  }

  getallpendingreg(){
    this.approveregService.getallpendingreg()
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallpendingreg');
         this.pendingreg=data;
         this.count = this.pendingreg.length;
          console.log(this.pendingreg);
        }else {
          console.log(this.pendingreg);
        }
      });
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
