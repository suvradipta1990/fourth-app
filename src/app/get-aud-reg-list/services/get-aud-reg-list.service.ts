import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import {AudRegList} from '../AudRegList';

@Injectable({
  providedIn: 'root'
})
export class GetAudRegListService {

  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getaudreglist(audname :string,apprejlist :string): Observable<AudRegList[]> {

    const v_input_param  = {audname: audname,apprejlist : apprejlist};
    return this.http.post<AudRegList[]>(this.urlString + '/getaudreglist',v_input_param);
 }

}
