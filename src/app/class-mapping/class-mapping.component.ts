import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import {AddhistoryService} from '../addhistory/services/addhistory.service';
import { Teachers } from '../teachers/teachers';
import { PaymentService } from "../createpayment/services/payment.service";
import { Class } from '../create-class/Class';
import { CreateClassService } from '../create-class/services/create-class.service';
import { ClassMappingService } from "./services/class-mapping.service";

@Component({
  selector: 'app-class-mapping',
  templateUrl: './class-mapping.component.html',
  styleUrls: ['./class-mapping.component.css']
})

export class ClassMappingComponent implements OnInit {

  public loggedInUser: string="";
  public teachers :Teachers[];
  public classes :Class[];
  public class: string="";
  public teacher: string="";
  public is_select_teacher : boolean=false;

  constructor(private router: Router,
    public authService: AuthService,
    private classMappingService: ClassMappingService,
    private paymentService: PaymentService,
    private createClassService: CreateClassService) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.getallteachers();
    this.getClassByTeacherId(null);
    this.is_select_teacher=false;
  }

  onTeacherChange(value :string) {
    this.teacher = value;
    this.is_select_teacher=true;
 }

 onchangeclass(value :string) {
    if (!this.is_select_teacher){
      alert('Please Select Teacher First');
     }
    else{
      this.class = value;
     }
  }

  getallteachers(){
    this.paymentService.getallteachers()
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallteachers for fees book');
         this.teachers=data;
         console.log(this.teachers);
        }else {
          console.log(this.teachers);
        }
      });
    }

    getClassByTeacherId(teacher_id :string){
      this.onTeacherChange(teacher_id);
                       this.createClassService.getClassByTeacherId(teacher_id)
            .subscribe((data) => {
              if(data != null ) {
                console.log('getallteachers for fees book');
                this.classes=data;
                console.log(this.teachers);
                }else {
                  console.log(this.teachers);
                }
              });
    }

    createclassmap(){
      //to do
    }

    back(){
      this.router.navigate(["/home"]);
      LoginComponent.logout();
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
