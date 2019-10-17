import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RegistrationConfirmationService } from './service/registration-confirmation.service';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html'
})
export class RegistrationConfirmationComponent implements OnInit {

  logInPageUrl: string = '/login';

  constructor(
    private route: ActivatedRoute,
    private confirmationService: RegistrationConfirmationService
  ) { }

  ngOnInit() {
    const token: string = this.route.snapshot.queryParamMap.get('activeToken');
    this.confirm(token)
  }

  private confirm(token: string) {
    this.confirmationService.confirm(token).subscribe();
  }
}
