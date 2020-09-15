import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teachers } from '../../teachers/teachers';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private urlString: string = 'http://192.168.0.14:3000';

  constructor(private http: HttpClient) { }

  createPayment(profile_id: string,officename: string,
                transacid: string,teacher: string,
                paymonthfrom: Date,paymonthto: Date,
                payamount: number,isadmin:string,
                regn_no:string,transacslip: string): Observable<any> {
          console.log(profile_id);

          const user  = {profile_id: profile_id,officename : officename,
                          transacid: transacid,teacher : teacher,
                          paymonthfrom: paymonthfrom,paymonthto: paymonthto,
                          payamount : payamount,isadmin : isadmin,
                          regn_no : regn_no,transacslip : transacslip};
                        
          return this.http.post<any>(this.urlString + '/createpayment',user);
    }

    getallteachers(): Observable<Teachers[]> {          
    return this.http.get<Teachers[]>(this.urlString + '/getallteachers');
    }

    getteacher(profile_id: string): Observable<any> {
           console.log(profile_id);
           const user  = {profile_id: profile_id};
              
           return this.http.post<any>(this.urlString + '/getteacherbyprofileid',user);
    }
}