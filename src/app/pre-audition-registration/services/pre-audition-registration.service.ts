import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreAuditionRegistrationService {
  
  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  preAudregister(firstname: string,lastname: string,mobilenumber: string,emailid: string,password: string,
                dateofbirth: string,oldregnno: string,confirmpassword: string,
                dateofjoin:string,gender:string, fathersnumber: string,
                mothersnumber: string,addresstype: string,addressline1: string,
                addressline2: string,district: string,city: string,
                pincode: string,aadhaar: string,subject: string,
                fathersname: string,mothersname: string,
                fathersoccupation: string,mothersoccupation: string)
        : Observable<any> {

const user  = {firstname: firstname,lastname : lastname,
               mobilenumber: mobilenumber,emailid : emailid,
               password: password,dateofbirth: dateofbirth,
               oldregnno : oldregnno,confirmpassword : confirmpassword,
               dateofjoin : dateofjoin,gender : gender,
               fathersnumber : fathersnumber,mothersnumber : mothersnumber,
               addresstype : addresstype,addressline1 : addressline1,
               addressline2 : addressline2,district : district,
               city : city,pincode : pincode, aadhaar : aadhaar,subject : subject,
               fathersname : fathersname,mothersname : mothersname,
               fathersoccupation : fathersoccupation,mothersoccupation : mothersoccupation};
               
return this.http.post<any>(this.urlString + '/pre-aud-register',user);
}
}
