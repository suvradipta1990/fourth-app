import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-background',
  templateUrl: './change-background.component.html',
  styleUrls: ['./change-background.component.css']
})
export class ChangeBackgroundComponent implements OnInit {

  public loggedInUser :string="";
  public isadmin :string="false";
  public pagebgchange :string="";
  public backgroungImg :string="";

  public uploadedFiles: Array < File > ;
  public filetype : string="";
  public reciept_attached : boolean=false;

  private urlString: string = 'http://192.168.0.14:3000'; 

  constructor(private router: Router,
             public authService: AuthService,
             private http: HttpClient) { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('is_admin').toString();
    this.loggedInUser = localStorage.getItem('user_name');
      if (this.isadmin!="true"){
         alert("You are not Authorized to view this page");
         this.router.navigate(["/home"]);
      }
   }

   fileChange(element:any) {
    this.uploadedFiles = element.target.files;
    this.reciept_attached=true;
  }

   UploadBackground(){
    var filename: string=this.pagebgchange;
    
    if (filename=="" ||this.reciept_attached==false){
      alert("Either No File Selected/Page not selected")
    }
    else{
        let formData = new FormData();
          for (var i = 0; i < this.uploadedFiles.length; i++) {
              var filetype=this.uploadedFiles[i].name;
              this.checkFileType(filetype);
              filename=filename+".jpg";
            //  alert(filename); 
              formData.append("uploads", this.uploadedFiles[i], filename);
            }
          this.http.post<any>(this.urlString + '/uploadBackgroundPic',formData)
              .subscribe((response: any) => {

                  alert('background Image Sucessfully Update with file name: '+this.pagebgchange);
              })
     }
 }

 checkFileType(filetype :string) : any{ 
  alert ("Uploading File: "+filetype);
    this.filetype=filetype.substring(filetype.lastIndexOf("."))
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
