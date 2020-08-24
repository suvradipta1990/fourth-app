import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UpdateProfilePhotoService} from './services/update-profile-photo.service';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
//import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

const uploadAPI = 'http://localhost:3000/upload'; // better use a service class

@Component({
  selector: 'app-update-profile-photo',
  templateUrl: './update-profile-photo.component.html',
  styleUrls: ['./update-profile-photo.component.css']
})
export class UpdateProfilePhotoComponent implements OnInit {

  public loggedInUser: string="";
  public photo: File;
  public regnno : string="";
  public uploadedFiles: Array < File > ;


  //public uploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });
  private urlString: string = 'http://localhost:3000';
  
  constructor(private router: Router,
              public authService: AuthService,
              public updateProfilePhotoService: UpdateProfilePhotoService,
              private http: HttpClient) { }
      

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem('user_name');
    this.regnno = localStorage.getItem('regn_no');
  }

  fileChange(element:any) {
    this.uploadedFiles = element.target.files;
}

  UploadPhoto(regnno:string){
    let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
          alert(this.uploadedFiles[i].type);
            formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
            alert(formData); 
         }
        // const filename=regnno;
        // const v_input_param ={formData :formData,regnno:filename};
        this.http.post<any>(this.urlString + '/uploadProfilePic',formData)
            .subscribe((response: any) => {

                alert('response received is '+ response);
            })
  }

  logout(){
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('user_id');
    localStorage.removeItem('profile_id');
    localStorage.clear();
    this.router.navigate(["/"]);
    LoginComponent.logout();
  }
}
