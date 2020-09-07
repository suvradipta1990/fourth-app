import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import {AudRegList} from '../AudRegList';

@Injectable({
  providedIn: 'root'
})
export class GetAudRegListService {

  private urlString: string = 'http://192.168.0.14:3000';

  constructor(private http: HttpClient) { }


  getaudreglist(audname :string,apprejlist :string): Observable<AudRegList[]> {

    const v_input_param  = {audname: audname,apprejlist : apprejlist};
    return this.http.post<AudRegList[]>(this.urlString + '/getaudreglist',v_input_param);
 }

 view_form(id:string): Observable<AudRegList[]> {

    const v_input_param  = {id: id};
    return this.http.post<AudRegList[]>(this.urlString + '/getAudRegForm',v_input_param);
  }

  approve_reg(id :number,is_selected :number): Observable<any> {

    const v_input_param  = {id: id,is_selected : is_selected};
    return this.http.post<any>(this.urlString + '/selectReject',v_input_param);
  }

}
