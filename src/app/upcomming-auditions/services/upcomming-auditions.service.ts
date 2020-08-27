import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Audition} from '../Audition';

@Injectable({
  providedIn: 'root'
})
export class UpcommingAuditionsService {

  private urlString: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getallUpcommingaud(){
    return this.http.get<Audition[]>(this.urlString + '/getUpcommingAud');
  }
}
