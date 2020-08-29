import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { GetAudRegListService } from "./services/get-aud-reg-list.service";
import {AudRegList} from './AudRegList';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-get-aud-reg-list',
  templateUrl: './get-aud-reg-list.component.html',
  styleUrls: ['./get-aud-reg-list.component.css']
})
export class GetAudRegListComponent implements OnInit {

  public  audRegList: AudRegList[];
  public  audForm: AudRegList[];
  public loggedInUser: string="";
  public count :number;
  public result :string;
  public remakrs :string="";
  public audname : string="";
  public apprejlist :string="all";

  public feeRecieptRootDir ="assets/images/audition/AUDITION-FEE-";
  public profilePicPath:string="assets/images/audition/AUDITION-DP-";

  constructor(private router: Router,
    public authService: AuthService,
    private getAudRegListService: GetAudRegListService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
  }

  getaudreglist(audname :string){
    this.getAudRegListService.getaudreglist(audname,this.apprejlist)
    .subscribe((data) => {
      if(data != null ) {
        console.log('getaudreglist');
         this.audRegList=data;
         this.count = this.audRegList.length;
          console.log(this.audRegList);
        }else {
          console.log(this.audRegList);
        }
      });
    }

    

      view_form(id :string){
         localStorage.setItem('audition_pk',id);
         console.log("id :"+id);
         console.log("view-form calling");
         this.router.navigate(["/view-reg-form"]);
        // this.router.navigate(["/view-reg-form"]);
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
