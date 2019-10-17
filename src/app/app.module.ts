import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateTripComponent } from './trip/create-trip/create-trip.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTripComponent,
    RegisterComponent,
    RegistrationConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
