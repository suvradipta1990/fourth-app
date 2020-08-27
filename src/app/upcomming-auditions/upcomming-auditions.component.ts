import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UpcommingAuditionsService } from "./services/upcomming-auditions.service";
import {Audition} from './Audition';


@Component({
  selector: 'app-upcomming-auditions',
  templateUrl: './upcomming-auditions.component.html',
  styleUrls: ['./upcomming-auditions.component.css']
})
export class UpcommingAuditionsComponent implements OnInit {

  public  auditions: Audition[];
  public  count: number;

  constructor(private router: Router,
    public authService: AuthService,
    private upcommingAuditionsService: UpcommingAuditionsService) { }

  ngOnInit(): void {
    this.getallUpcommingaud();

  }

  getallUpcommingaud(){
    this.upcommingAuditionsService.getallUpcommingaud()
    .subscribe((data) => {
      if(data != null ) {
        console.log('getallpendingreg');
         this.auditions=data;
         this.count = this.auditions.length;
          console.log(this.auditions);
        }else {
          console.log(this.auditions);
        }
      });
    }

    aud_registration(audition_id :string,audition_name:string){
      console.log(audition_id,audition_name);
      localStorage.setItem('audition_id', audition_id);
      localStorage.setItem('audition_name', audition_name);
      this.router.navigate(["/pre-audition-registration"]);
    }
}
