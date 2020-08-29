import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import {AudRegList} from '../get-aud-reg-list/AudRegList';
import { ViewRegFormService } from './services/view-reg-form.service';
import {GetAudRegListComponent} from '../get-aud-reg-list/get-aud-reg-list.component';

@Component({
  selector: 'app-view-reg-form',
  templateUrl: './view-reg-form.component.html',
  styleUrls: ['./view-reg-form.component.css']
})
export class ViewRegFormComponent implements OnInit {

  public  audForm: AudRegList[];
  public id : string="";
  public audname :string="";
  public profilePicPath:string="assets/images/audition/";

  constructor(private router: Router,
    public authService: AuthService,
    private viewRegFormService: ViewRegFormService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('audition_pk');
    this.audname = localStorage.getItem('audname');
    console.log("audition_pk :" + this.id);
    this.view_form(this.id);
  }

  view_form(id :string){
    this.viewRegFormService.view_form(id)
    .subscribe((data) => {
      if(data != null ) {
        console.log('view_form');
         this.audForm=data;
          console.log(this.audForm);
        }else {
          console.log(this.audForm);
        }
      });
    }
}
