import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
export * from './dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public sidebar :string="false";
  constructor() { }

  ngOnInit(): void {
    this.sidebar=localStorage.getItem('login');
  }

}
