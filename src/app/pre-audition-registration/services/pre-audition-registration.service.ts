import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreAuditionRegistrationService {
  
  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  audRegister(audition_id : string, firstname : string, emailid : string, 
                  mobilenumber : string, altmobilenumber : string, aadhaar : string, 
                  dateofbirth : Date, gender : string,addresstype : string,
                  addressline1 : string,addressline2 : string,
                  district : string,city : string,pincode : string,subject : string,
                  fathersname : string,fathersoccupation : string,fathersnumber : string,
                  mothersname : string,mothersoccupation : string,mothersnumber : string,
                  totalyrstrainning : string, 
                  teacher1 : string, sdate1 : Date, edate1 : Date, 
                  teacher2 : string, sdate2 : Date, edate2 : Date,
                  teacher3 : string, sdate3 : Date, edate3 : Date,
                  certification : string,
                  fammusic : string,membername : string,
                  musicinstrument : string, refperson : string)
        : Observable<any> {

const v_input_param  = {faudition_id : audition_id, firstname : firstname, emailid : emailid, 
                        mobilenumber : mobilenumber, altmobilenumber : altmobilenumber, aadhaar : aadhaar, 
                        dateofbirth : dateofbirth, gender : gender,addresstype : addresstype,
                        addressline1 : addressline1,addressline2 : addressline2,
                        district : district, city : city, pincode : pincode, subject : subject,
                        fathersname : fathersname, fathersoccupation : fathersoccupation, fathersnumber : fathersnumber,
                        mothersname : mothersname, mothersoccupation : mothersoccupation, mothersnumber : mothersnumber,
                        totalyrstrainning : totalyrstrainning, 
                        teacher1 : teacher1, sdate1 : sdate1, edate1 : edate1, 
                        teacher2 : teacher2, sdate2 : sdate2, edate2 : edate2,
                        teacher3 : teacher3, sdate3 : sdate3, edate3 : edate3,
                        certification : certification,
                        fammusic : fammusic,membername : membername,
                        musicinstrument : musicinstrument, refperson : refperson};
               
return this.http.post<any>(this.urlString + '/pre-aud-register',v_input_param);
}
}
