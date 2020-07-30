import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// We haven't defined these services yet
import { AuthService } from '../auth.service';
export * from './login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  [x: string]: any;
  ngOnInit() {
  }
  ngOnDestroy() {
}
gethomepage(): void {
  this.router.navigate(['home']);
}
}