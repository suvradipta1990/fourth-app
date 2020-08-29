import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AudRegList} from '../../get-aud-reg-list/AudRegList';

@Injectable({
  providedIn: 'root'
})
export class ViewRegFormService {

  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  view_form(id:string): Observable<AudRegList[]> {

    const v_input_param  = {id: id};
    return this.http.post<AudRegList[]>(this.urlString + '/getAudRegForm',v_input_param);
  }
}
