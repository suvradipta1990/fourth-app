import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  validateforgetpwd(regnno: string, SecurityQues:string ,answer: string): Observable<any> {
     
           const user  = {regnno: regnno,SecurityQues : SecurityQues,answer : answer};
           return this.http.post<any>(this.urlString + '/foregetpwdvalidity',user);
    }

    updatepassword(regnno: string, password:string): Observable<any> {
     
      const user  = {regnno: regnno,password : password};
      return this.http.post<any>(this.urlString + '/updatepassword',user);
    }

    deleteuser(regnno: string): Observable<any> {
     
      const user  = {regnno: regnno};
      return this.http.post<any>(this.urlString + '/deleteuser',user);
    }

}
