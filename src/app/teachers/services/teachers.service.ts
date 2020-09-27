import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private urlString: string = 'http://192.168.0.14:3000';

  constructor(private http: HttpClient) { }

  createteacher(firstname: string,speciality: string,mobilenumber: string,emailid: string,
              dateofbirth: Date,gender:string, addressline1: string,
              addressline2: string,district: string,city: string,
              pincode: number,subject: string): Observable<any> {
          console.log(dateofbirth);
          const user  = {firstname: firstname,speciality : speciality,
                        mobilenumber: mobilenumber,emailid : emailid,
                       dateofbirth: dateofbirth,gender : gender,
                        addressline1 : addressline1,addressline2 : addressline2,district : district,
                        city : city,pincode : pincode,subject : subject};
                        
          return this.http.post<any>(this.urlString + '/createteacher',user);
}
}
