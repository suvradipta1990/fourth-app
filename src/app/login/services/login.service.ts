import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    user_id: number;
    username: string;
    password: string;
    is_admin: boolean;
    created_date: string;
    created_by: number;
    updated_date: string;
    updated_by: number;
    is_deleted: boolean;

  // private users : User[] = [];
   private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
     
      const user  = {username: username,password : password};
      return this.http.post<any>(this.urlString + '/login',user);
  }
}
