import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private sessionStorageService:SessionStorageService,private router:Router,private authenticationService:AuthenticationService){}

  ngOnInit(): void {
    
    this.authenticationService.setUserRole('guest');
    this.sessionStorageService.removeItem('token');
    this.router.navigate(["/"]);
  }

}
