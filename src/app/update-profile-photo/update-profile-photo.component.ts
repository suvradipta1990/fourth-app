import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UpdateProfilePhotoService} from './services/update-profile-photo.service';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';


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
  public filetype : string="";


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
     var filename: string=regnno;
    let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
           var filetype=this.uploadedFiles[i].name;
           this.checkFileType(filetype);
           filename=filename+this.filetype;
          //  alert(filename); 
            formData.append("uploads", this.uploadedFiles[i], filename);
         }
        this.http.post<any>(this.urlString + '/uploadProfilePic',formData)
            .subscribe((response: any) => {

                alert('File Sucessfully Uploaded');
                this.router.navigate(["/home"]);
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

  checkFileType(filetype :string) : any{ 
    alert ("File Name Recieve: "+filetype);
      this.filetype=filetype.substring(filetype.lastIndexOf("."))

    }

}
