import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StudentPaymentView} from '../StudentPaymentView';

@Injectable({
  providedIn: 'root'
})
export class StudentPaymentHistoryService {

  private urlString: string = 'http://192.168.0.14:3000';
  constructor(private http: HttpClient) { }

  getallpayment(regno :string): Observable<StudentPaymentView[]> {
    const v_input_param  = {regno: regno};
    return this.http.post<StudentPaymentView[]>(this.urlString + '/student-payment-history',v_input_param);
  }
}
