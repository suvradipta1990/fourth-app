import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public userName :string="";
  public answer :string="";
  public SecurityQues : string="";
  constructor() { }

  ngOnInit(): void {
  }

}
