import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Approvepayment} from '../Approvepayment';

@Injectable({
  providedIn: 'root'
})
export class ApprovepaymentService {

  private urlString: string = 'http://192.168.0.14:3000';
  constructor(private http: HttpClient) { }

  getallpendingpayment(): Observable<Approvepayment[]> {
      return this.http.get<Approvepayment[]>(this.urlString + '/pendingpayment');
    }
 
    approve_rej_payment(p_approve_del: number,p_id: number,p_remarks: any): Observable<any>{
       const v_input_param  = {p_approve_del: p_approve_del,p_id:p_id,p_remarks: p_remarks};
       return this.http.post<any>(this.urlString + '/approve_reject_payment',v_input_param);
    }
}
