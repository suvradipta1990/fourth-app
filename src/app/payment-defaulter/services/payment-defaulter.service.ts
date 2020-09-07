import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PaymentSummary} from "../../home/PaymentSummary";
@Injectable({
  providedIn: 'root'
})
export class PaymentDefaulterService {

  private urlString: string = 'http://192.168.0.14:3000';
  constructor(private http: HttpClient) { }


  getallpaymentdefaulter(no_of_months:number): Observable<PaymentSummary[]> {
    const v_input_param  = {no_of_months: no_of_months}
    return this.http.post<PaymentSummary[]>(this.urlString + '/getallpaymentdefaulter',v_input_param);
 }
}
