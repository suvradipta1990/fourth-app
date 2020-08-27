import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAuditionService {

  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createaudition(audname: string,
                 dateofaud: Date,
                 subject: string,
                 regfee: number): Observable<any> {

const user  = {audname: audname,
              dateofaud : dateofaud,
              subject: subject,
              regfee : regfee};
               
return this.http.post<any>(this.urlString + '/createaudition',user);
}
}
