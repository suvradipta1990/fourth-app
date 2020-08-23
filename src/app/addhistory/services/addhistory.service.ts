import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddhistoryService {

    private urlString: string = 'http://localhost:3000';
    constructor(private http: HttpClient) { }


    add_del_history(teachername: string,
               practisefrom: Date,
               practisetill: Date,
               is_lalitkala_teacher: boolean,
               is_delete: number,
               history_id: number,
               profile_id: string):
             Observable<any> {

        const v_input_param  = {teachername: teachername,
                                practisefrom: practisefrom,
                                practisetill: practisetill,
                                is_lalitkala_teacher: is_lalitkala_teacher,
                                is_delete: is_delete,
                                history_id : history_id,
                                profile_id : profile_id};
                                
                        console.log("v_input_param :"+ v_input_param)
        return this.http.post<any>(this.urlString + '/add_history',v_input_param);
    }
}
