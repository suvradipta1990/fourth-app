import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    // user_id: number;
    // username: string;
    // password: string;
    // is_admin: boolean;
    // created_date: string;
    // created_by: number;
    // updated_date: string;
    // updated_by: number;
    // is_deleted: boolean;

   private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  register(firstname: string,lastname: string,mobilenumber: string,emailid: string,password: string,
          dateofbirth: string,oldregnno: string,confirmpassword: string,
          dateofjoin:string,gender:string): Observable<any> {
      console.log(dateofbirth);
      const user  = {firstname: firstname,lastname : lastname,
                     mobilenumber: mobilenumber,emailid : emailid,
                     password: password,dateofbirth: dateofbirth,
                     oldregnno : oldregnno,confirmpassword : confirmpassword,
                     dateofjoin : dateofjoin,gender : gender};
                     
      return this.http.post<any>(this.urlString + '/register',user);
  }
}
