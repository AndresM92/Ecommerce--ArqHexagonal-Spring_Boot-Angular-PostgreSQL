import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private sessionStorageService:SessionStorageService,private router:Router){}

  ngOnInit(): void {
    
    this.sessionStorageService.removeItem('token');
    this.router.navigate(["/"]);
  }

}
