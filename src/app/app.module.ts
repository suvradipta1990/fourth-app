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
import { FileUploadModule } from 'ng2-file-upload';
import { ApproveregComponent } from './approvereg/approvereg.component';
import { ApprovepaymentComponent } from './approvepayment/approvepayment.component';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddhistoryComponent } from './addhistory/addhistory.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfilePicComponent } from './update-profile-pic/update-profile-pic.component';
import { PaymentDefaulterComponent } from './payment-defaulter/payment-defaulter.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { UpdateProfilePhotoComponent } from './update-profile-photo/update-profile-photo.component';


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
    AddhistoryComponent,
    ViewProfileComponent,
    UpdateProfilePicComponent,
    PaymentDefaulterComponent,
    ForgetPasswordComponent,
    TermsAndConditionsComponent,
    UpdateProfilePhotoComponent
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
    MatButtonModule,
    FileUploadModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
