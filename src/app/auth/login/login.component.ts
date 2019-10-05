import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials('', '');

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.credentials);
  }
}
