import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClassMappingService {

  private urlString: string = 'http://192.168.0.14:3000';

  constructor(private http: HttpClient) { }

  classMapping(regnno: string,
               teacher: number,
               classes: number): Observable<any> {

      const v_input_param  = {regnno: regnno,teacher : teacher,classes: classes};             
      return this.http.post<any>(this.urlString + '/classMapping',v_input_param);
  }
}
