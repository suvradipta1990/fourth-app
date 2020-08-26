import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileService } from "../home/services/home.service";
import {Profile} from "../home/Profile";
import {ProfileHistory} from "../home/ProfileHistory";
import {PaymentSummary} from "../home/PaymentSummary";
import {Address} from "../home/Address";
import { LoginComponent } from '../login/login.component';
import { PaymentService } from "./services/payment.service";
import { HttpClient } from '@angular/common/http';

export * from './createpayment.component';

@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.css']
})
export class CreatepaymentComponent implements OnInit {
  

  public loggedInUser: string="";
  public profile_id: string="";
  public  isadmin: string="";
  public officename: string="LALITKALA";
  public transacslip: string="";
  public transacid: string="";
  public teacher: string="";
  public paymonthfrom: string="";
  public paymonthto: string="";
  public permonthfees: string="";
  public payamount: number;
  public regn_no: string="";
  public create_payment_result: string;
  public  paysummary: PaymentSummary[];

  public uploadedFiles: Array < File > ;
  public filetype : string="";

  private urlString: string = 'http://localhost:3000';

  constructor(private router: Router,
    public authService: AuthService,
    private profileService: ProfileService,
    private paymentService: PaymentService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.profile_id = localStorage.getItem('profile_id');
    this.isadmin = localStorage.getItem('is_admin').toString();
    console.log(this.loggedInUser);
    console.log(this.isadmin);
    console.log("fees book profile_id: " +this.profile_id);
    this.getPaymentSummary(this.profile_id);
  }

  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
}

  createPayment(){
    this.paymentService.createPayment(this.profile_id,
                                      this.officename,
                                      this.transacid,
                                      this.teacher,
                                      this.paymonthfrom,
                                      this.paymonthto,
                                      this.payamount,
                                      this.isadmin,
                                      this.regn_no,
                                      this.transacslip)
                .subscribe((data) => {
                  if(data != null ) {  
                    this.create_payment_result=data[0].create_payment;
                    console.log(data);
                    //this.openDialog(data);
                    alert(this.create_payment_result);
                    if(this.create_payment_result.lastIndexOf("SUCESSFULL")>0){
                      this.UploadFeeReciept(this.regn_no,this.paymonthfrom);
                      this.ngOnInit();
                      this.router.navigate(["/createpayment"]);
                    }
                   
                  }else {
                    alert("Payment Creation Failed");
                  }
                });
  }

  getPaymentSummary(profile_id: string){
    this.profileService.getPaymentSummary(this.profile_id)
    .subscribe((data) => {
      if(data != null ) {
        console.log('paysummary_count for fees book');
         this.paysummary=data;
         this.regn_no=this.paysummary[0].regn_no;
         this.permonthfees=this.paysummary[0].fees_payble_per_month;
         this.paymonthfrom=this.paysummary[0].pay_month_from;
         this.paymonthto=this.paysummary[0].pay_month_to;
          console.log('data:  '+this.regn_no);
        }else {
          console.log(this.paysummary);
        }
      });
    }

    UploadFeeReciept(regnno:string,paymonthfrom :string){
      var filename: string=regnno+'-'+paymonthfrom.substring(0,10);
      
     let formData = new FormData();
         for (var i = 0; i < this.uploadedFiles.length; i++) {
            var filetype=this.uploadedFiles[i].name;
            this.checkFileType(filetype);
            filename=filename+this.filetype;
           //  alert(filename); 
             formData.append("uploads", this.uploadedFiles[i], filename);
          }
         this.http.post<any>(this.urlString + '/uploadFeeReciept',formData)
             .subscribe((response: any) => {
 
                 alert('Payment And Reciept Sucessfully Uploaded');
                 this.router.navigate(["/home"]);
             })
   }

   checkFileType(filetype :string) : any{ 
    alert ("File Name Recieve: "+filetype);
      this.filetype=filetype.substring(filetype.lastIndexOf("."))

    }


  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/"]);
    LoginComponent.logout();
  }



}
