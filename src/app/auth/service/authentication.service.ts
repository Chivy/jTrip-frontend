import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Credentials } from '../credentials';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { TokenService } from '../token/token.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' }),
  observe : 'response' as 'response'
}
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  static readonly TOKEN_STORAGE_KEY = 'token';
  redirectToUrl: String = '/trip';

  constructor(private router: Router, private tokenService: TokenService) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
    .subscribe(
      res => {
        this.saveToken(res.headers.get('authorization'));
        this.router.navigateByUrl('/');
      }
    )
  }

  private saveToken(token: string) {
    localStorage.setItem(AuthenticationService.TOKEN_STORAGE_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(AuthenticationService.TOKEN_STORAGE_KEY);
  }
}
