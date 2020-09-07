import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {

  private urlString: string = 'http://192.168.0.14:3000';
  //profile: Profile;
 constructor(private http: HttpClient) { }

  updateProfile(profile_id: string,regno: string,oldregnno: string,
                firstname: string,middlename: string,lastname: string,dateofbirth :Date,
                mobilenumber: string,
                fathersname: string,fathersnumber: string,
                mothersname: string,mothersnumber: string,
                emailid: string,dateofjoin: string,
                fathersoccupation: string,mothersoccupation: string,
                gender: string,aadhaar: string,subject: string,
                country: string,addressline1: string,addressline2: string,
                district: string,city: string,pincode :number,address_type :string):
               Observable<any> {
     
    const v_input_param  = {profile_id:profile_id,regno:regno,oldregnno:oldregnno,
                          firstname:firstname,middlename:middlename,lastname:lastname,dateofbirth,
                          mobilenumber:mobilenumber,
                          fathersname:fathersname,fathersnumber:fathersnumber,
                          mothersname:mothersname,mothersnumber:mothersnumber,
                          emailid:emailid,dateofjoin:dateofjoin,
                          fathersoccupation:fathersoccupation,mothersoccupation:mothersoccupation,
                          gender:gender,aadhaar:aadhaar,subject:subject,
                          country:country,addressline1:addressline1,addressline2:addressline2,
                          district:district,city:city,pincode:pincode,address_type:address_type};
    
                          console.log("v_input_param :"+ v_input_param)
    
    return this.http.post<any>(this.urlString + '/updateProfile',v_input_param);
  }
}
