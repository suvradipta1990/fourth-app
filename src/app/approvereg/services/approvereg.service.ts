import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Approvereg} from '../approvereg';

@Injectable({
  providedIn: 'root'
})
export class ApproveregService {


  private urlString: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getallpendingreg(): Observable<Approvereg[]> {
     
   // const v_profile_id  = {profile_id: profile_id};
  //  console.log("v_profile_id :"+ v_profile_id)
    return this.http.get<Approvereg[]>(this.urlString + '/pendingreg');
}
}
