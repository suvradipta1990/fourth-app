import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Approvereg} from '../approvereg';

@Injectable({
  providedIn: 'root'
})
export class ApproveregService {


  private urlString: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getallpendingreg(): Observable<Approvereg[]> {
     
   // const v_profile_id  = {profile_id: profile_id};
  //  console.log("v_profile_id :"+ v_profile_id)
    return this.http.get<Approvereg[]>(this.urlString + '/pendingreg');
}

approve_rej_reg(p_approve_del: number,p_id: number,p_remarks: any): Observable<any>{
  const v_input_param  = {p_approve_del: p_approve_del,p_id:p_id,p_remarks: p_remarks};
  return this.http.post<any>(this.urlString + '/approve_reject_reg',v_input_param);
}
}
