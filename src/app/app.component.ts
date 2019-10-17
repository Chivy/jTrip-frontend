import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jTrip';

  logInPageUrl: string = '/login';
  signUpPageUrl: string = '/signup';
  createTripPageUrl: string = '/create-trip';
}
