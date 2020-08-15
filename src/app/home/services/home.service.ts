import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Profile} from "../Profile";
import {ProfileHistory} from "../ProfileHistory";
import {PaymentSummary} from "../PaymentSummary";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile_id:number;
  regn_no:string;
  reg_no_old:string;
  student_photo:string;
  first_name:string;
  middle_name:string;
  last_name:string;
  date_of_birth:Date;
  age:number;
  fees: number;
  discounted_fees: number;
  mobile_number:string;
  contact_number:string;
  fathers_name:string;
  fathers_conact_number:string;
  mothers_name:string;
  mothers_number:string;
  created_date:string;
  created_by:string;
  updated_date:Date;
  updated_by: number;
  is_deleted:boolean
  user_id:number;

  // private users : User[] = [];
   private urlString: string = 'http://localhost:3000';
   //profile: Profile;
  constructor(private http: HttpClient) { }

  getprofile(userid: any): Observable<any> {
     
      const profile  = {userid: userid};
      return this.http.post<any>(this.urlString + '/profile',profile);
  }
  getProfileHistory(profile_id: string): Observable<ProfileHistory[]> {
     
    const v_profile_id  = {profile_id: profile_id};
    console.log("v_profile_id :"+ v_profile_id)
    return this.http.post<ProfileHistory[]>(this.urlString + '/profilehistory',v_profile_id);
}

getPaymentSummary(profile_id: string): Observable<PaymentSummary[]> {
     
  const v_profile_id  = {profile_id: profile_id};
  console.log("v_profile_id :"+ v_profile_id)
  return this.http.post<PaymentSummary[]>(this.urlString + '/getPaymentSummary',v_profile_id);
}


}
