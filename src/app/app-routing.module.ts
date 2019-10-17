import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { CreateTripComponent } from './trip/create-trip/create-trip.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'create-trip', component: CreateTripComponent},
  {path: 'confirm', component: RegistrationConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
