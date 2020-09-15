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
  public class: number;
  public teacher: number;
  public is_select_teacher : boolean=false;
  public regnno : string="";
  public is_admin : string="";
  public result :string="";

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
    this.is_admin = localStorage.getItem('is_admin');
    alert(this.is_admin);
    if(this.is_admin=="false"){
       this.regnno = this.loggedInUser;
       alert(this.regnno);
    }
  }

  onTeacherChange(value :number) {
    this.teacher = value;
    this.is_select_teacher=true;
 }

 onchangeclass(value :number) {
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

    getClassByTeacherId(teacher_id :number){
        this.onTeacherChange(teacher_id);
        this.createClassService.getClassByTeacherId(teacher_id)
            .subscribe((data) => {
              if(data != null ) {
                this.classes=data;
                console.log(this.teachers);
                }else {
                  console.log(this.teachers);
                }
          });
    }

    createclassmap(){
      this.classMappingService.classMapping(this.regnno,this.teacher,this.class)
        .subscribe((data) => {
              if(data != null ) {
                console.log('getallteachers for fees book');
                this.result=data[0].create_student_class_mapping;
                console.log(this.result);
                alert(this.result);
                }
                if(this.is_admin=="true"){
                  this.router.navigate(["/pendingapprovals"]);
               }
               else{
                this.router.navigate(["/home"]);
               }
         });
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
