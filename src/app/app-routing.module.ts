import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';
import { ApproveregComponent } from './approvereg/approvereg.component';
import { ApprovepaymentComponent } from './approvepayment/approvepayment.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'students', component: StudentsComponent,canActivate: [AuthGuard] },
  { path: 'pendingapprovals', component: PendingapprovalsComponent,canActivate: [AuthGuard] },
  { path: 'approvereg', component: ApproveregComponent,canActivate: [AuthGuard] },
  { path: 'approvepayment', component: ApprovepaymentComponent,canActivate: [AuthGuard] },
  { path: 'createpayment', component: CreatepaymentComponent,canActivate: [AuthGuard] },
  { path: 'searchstudent', component: SearchstudentComponent,canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingModule = RouterModule.forRoot(routes);