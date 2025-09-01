import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/common/user';
import { UserType } from 'src/app/common/user-type';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User=new User();

  constructor(private authenticationService:AuthenticationService,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    
  }

  register(){
    this.user.username=this.user.email;
    this.user.userType=UserType.USER;
    //console.log(this.user);
    this.authenticationService.register(this.user).subscribe(
      res=>{
        this.toastr.success('Usuario Registrado','Usuario');
        //console.log(res)
      }

    );

    this.router.navigate(['user/login']);
  }

}
