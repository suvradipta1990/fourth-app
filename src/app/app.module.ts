import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { AuthGuard } from './auth.guard';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ApproveregComponent } from './approvereg/approvereg.component';
import { ApprovepaymentComponent } from './approvepayment/approvepayment.component';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddhistoryComponent } from './addhistory/addhistory.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    StudentsComponent,
    ApproveregComponent,
    ApprovepaymentComponent,
    PendingapprovalsComponent,
    CreatepaymentComponent,
    SearchstudentComponent,
    EditprofileComponent,
    AddhistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
