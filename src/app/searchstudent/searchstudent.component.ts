import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SearchstudentService } from "./services/searchstudent.service";
import {Profile} from "../home/Profile";
import {ProfileHistory} from "../home/ProfileHistory";
import {PaymentSummary} from "../home/PaymentSummary";
import {Address} from "../home/Address";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {


  public loggedInUser: string="";
  public firstname: string="";
  public lastname: string="";
  public mobileno: string="";
  public regno: string="";
  public profiles:Profile[];
  public count: number;
  public test_name: string="";
  public discounted_fees: number;
  public fees: number;
 public update_fee: string;
  constructor(private router: Router,
    public authService: AuthService,
    private searchstudentService: SearchstudentService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.firstname = localStorage.getItem('searchbyfirstname');
    this.lastname = localStorage.getItem('searchbylastname');
    this.mobileno = localStorage.getItem('searchbymobileno');
    this.regno = localStorage.getItem('searchbyregno');
    this.searchstudent();
  }

  searchstudent(){
    
    this.searchstudentService.searchstudent(this.firstname,this.lastname,
                                            this.mobileno,this.regno)
    .subscribe((data) => {
      if(data != null ) {
        console.log('searchstudent');
        this.profiles=data;
        this.test_name=this.profiles[0].first_name;
        console.log(this.test_name);
         this.count = this.profiles.length;
          console.log(this.profiles);
        }else {
          console.log(this.profiles);
        }
      });
    }

    updatefees(regn_no:string,fees:number,discounted_fees:number){
      console.log(regn_no,fees,discounted_fees);
      console.log(fees);
      console.log(discounted_fees);
      this.searchstudentService.updatefees(regn_no,fees,discounted_fees)
      .subscribe((data) => {
        if(data != null ) {
          console.log('updatefees');
          this.update_fee=data[0].update_fees;
          console.log(this.update_fee);
          alert(this.update_fee);
          this.fees=null;
          this.discounted_fees=null;
           this.ngOnInit();
           this.router.navigate(["/searchstudent"]);
            console.log(this.profiles);
          }else {
            console.log(this.profiles);
          }
        });
      }

      view_profile(profile_id:number){
            //to do
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
    this.router.navigate(["/students"]);
  }
}
