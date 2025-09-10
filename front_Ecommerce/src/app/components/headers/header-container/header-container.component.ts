import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {


  role: string = "guest";

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    this.authenticationService.getUserRole().subscribe(
      rol => {
        this.role = rol;
      }
    );
  }

}
