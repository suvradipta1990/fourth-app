import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../Class';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreateClassService {

  private urlString: string = 'http://192.168.0.14:3000';

  constructor(private http: HttpClient) { }

  createclass(teacher: string,subject: string,
              dow: string,stime: Time,etime: Time): Observable<any> {
            console.log(stime+' '+etime);

            const v_input_param  = {teacher: teacher,subject : subject,
                                    dow: dow,stime : stime,etime: etime};             
            return this.http.post<any>(this.urlString + '/createclass',v_input_param);
   }

   getClassByTeacherId(teacher_id: number): Observable<Class[]> {
                     console.log(teacher_id);

              const v_input_param  = {teacher_id: teacher_id};             
      return this.http.post<Class[]>(this.urlString + '/getClassByTeacher',v_input_param);
}
}
