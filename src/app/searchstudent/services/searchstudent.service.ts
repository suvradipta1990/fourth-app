import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Profile} from "../../home/Profile";

@Injectable({
  providedIn: 'root'
})
export class SearchstudentService {

  private urlString: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

     searchstudent(firstname: string,lastname: string,
                  mobileno: string,regno: string): Observable<Profile[]>{
        const v_input_param  = {firstname: firstname,lastname:lastname,
                                mobileno: mobileno,regno: regno};
        return this.http.post<Profile[]>(this.urlString + '/search_student',v_input_param);
     }

      updatefees(regn_no: string,fees: number,
        discounted_fees: number): Observable<any>{
          const v_input_param  = {regn_no: regn_no,fees:fees,discounted_fees: discounted_fees};
          return this.http.post<any>(this.urlString + '/update_fees',v_input_param);
      }
}
