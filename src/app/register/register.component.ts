import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './model/register';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public register: Register = new Register('', '', '', '', '');

  constructor(public router: Router, public registerService: RegisterService) { }

  ngOnInit() {
  }

  public signUp() {
    this.registerService.registerNewUser(this.register)
      .subscribe((data: {}) => {
        this.router.navigate(['/'])
      })
  }
}
