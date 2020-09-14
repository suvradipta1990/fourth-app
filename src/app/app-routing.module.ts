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
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AddhistoryComponent } from './addhistory/addhistory.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { PaymentDefaulterComponent } from './payment-defaulter/payment-defaulter.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { UpdateProfilePhotoComponent } from './update-profile-photo/update-profile-photo.component';
import { CreateAudtionComponent } from './create-audtion/create-audtion.component';
import { PreAuditionRegistrationComponent } from './pre-audition-registration/pre-audition-registration.component';
import { UpcommingAuditionsComponent } from './upcomming-auditions/upcomming-auditions.component';
import { GetAudRegListComponent } from './get-aud-reg-list/get-aud-reg-list.component';
import { ViewRegFormComponent } from './view-reg-form/view-reg-form.component';
import { ChangeBackgroundComponent } from './change-background/change-background.component';
import { StudentPaymentHistoryComponent } from './student-payment-history/student-payment-history.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pre-audition-registration', component: PreAuditionRegistrationComponent },
  { path: 'upcomming-auditions', component: UpcommingAuditionsComponent },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'students', component: StudentsComponent,canActivate: [AuthGuard] },
  { path: 'pendingapprovals', component: PendingapprovalsComponent,canActivate: [AuthGuard] },
  { path: 'approvereg', component: ApproveregComponent,canActivate: [AuthGuard] },
  { path: 'approvepayment', component: ApprovepaymentComponent,canActivate: [AuthGuard] },
  { path: 'createpayment', component: CreatepaymentComponent,canActivate: [AuthGuard] },
  { path: 'searchstudent', component: SearchstudentComponent,canActivate: [AuthGuard] },
  { path: 'editprofile', component: EditprofileComponent,canActivate: [AuthGuard] },
  { path: 'addhistory', component: AddhistoryComponent,canActivate: [AuthGuard] },
  { path: 'view-profile', component: ViewProfileComponent,canActivate: [AuthGuard] },
  { path: 'payment-defaulter', component: PaymentDefaulterComponent,canActivate: [AuthGuard] },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'update-profile-photo', component: UpdateProfilePhotoComponent,canActivate: [AuthGuard] },
  { path: 'create-audtion', component: CreateAudtionComponent,canActivate: [AuthGuard] },
  { path: 'get-aud-reg-list', component: GetAudRegListComponent,canActivate: [AuthGuard] },
  { path: 'change-background', component: ChangeBackgroundComponent,canActivate: [AuthGuard] },
  { path: 'student-payment-history', component: StudentPaymentHistoryComponent,canActivate: [AuthGuard] },
  { path: 'payment-report', component: PaymentReportComponent,canActivate: [AuthGuard] },
  { path: 'teachers', component: TeachersComponent,canActivate: [AuthGuard] },
  { path: 'create-class',  component: CreateClassComponent,canActivate: [AuthGuard] },
  { path: 'view-reg-form', component: ViewRegFormComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'aboutus', component: AboutusComponent },
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