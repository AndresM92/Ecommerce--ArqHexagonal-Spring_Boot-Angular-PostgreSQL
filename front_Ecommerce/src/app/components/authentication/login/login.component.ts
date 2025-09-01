import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Userdto } from 'src/app/common/userdto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';

  constructor(private router:Router, private authenticationService:AuthenticationService,private sessionStorage:SessionStorageService){}

  ngOnInit(): void {
    
  }

  login_user(){
    
    //console.log(this.username+this.password)
    let userDto=new Userdto(this.username,this.password);
    this.authenticationService.login(userDto).subscribe(
      token=>{
        console.log(token);
        this.sessionStorage.setItem('token',token);
        if(token.type=="ADMIN"){
          this.router.navigate(["/admin/product"]);
        }else{
          this.router.navigate(["/"]);
        }
      }

      
    );
  }


}
