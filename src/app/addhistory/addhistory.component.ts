import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AddhistoryService } from "./services/addhistory.service";
import {Profile} from "../home/Profile";
import { LoginComponent } from '../login/login.component';
import { ProfileService } from '../home/services/home.service';

@Component({
  selector: 'app-addhistory',
  templateUrl: './addhistory.component.html',
  styleUrls: ['./addhistory.component.css']
})
export class AddhistoryComponent implements OnInit {
  
  public loggedInUser: string="";
  public profile_id: string="";

  public teachername: string="";
  public practisefrom: Date;
  public practisetill: Date;
  public is_lalitkala_teacher: boolean;
  public is_delete: number=0;
  public history_id: number=0;
  public result :string;
  constructor(private router: Router,
              public authService: AuthService,
              public addhistoryService: AddhistoryService,
              public profileService:ProfileService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.profile_id = localStorage.getItem('profile_id');

  }


  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/"]);
    LoginComponent.logout();
  }

  cancel(){
    this.router.navigate(["/home"]);
  }

  add_history(){
    this.addhistoryService.add_del_history(this.teachername,this.practisefrom,this.practisetill,
                                          this.is_lalitkala_teacher,this.is_delete,this.history_id,
                                          this.profile_id)
                          .subscribe((data) => {
                          if(data != null ) {
                          console.log('update profile result');
                          this.result = data[0].add_del_history;
                          console.log(this.result);
                          alert(this.result); 
                          this.router.navigate(['/addhistory']);
                          }else {
                          console.log(this.result);
                          }
                          });
  }

}
