import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private router: Router,public authService: AuthService)  { }

  ngOnInit(): void {
  }

}
