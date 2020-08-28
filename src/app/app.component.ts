import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourth-app';

  constructor(private titleService:Title) {
    this.titleService.setTitle("Lalitkala");
  }
}
 