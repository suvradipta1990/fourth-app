import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PaymentSummary} from "../../home/PaymentSummary";

@Injectable({
  providedIn: 'root'
})
export class PaymentReportService {

  private urlString: string = 'http://192.168.0.14:3000';
  constructor(private http: HttpClient) { }


  getpaymentreport(startdate :Date,enddate : Date): Observable<PaymentSummary[]> {
    const v_input_param  = {startdate: startdate,enddate : enddate}
    return this.http.post<PaymentSummary[]>(this.urlString + '/getpaymentreport',v_input_param);
  }
}
