import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConfirmedUser } from '../model/IConfirmedUser';

@Injectable({
  providedIn: 'root'
})
export class RegistrationConfirmationService {
  
  private _url: string = 'http://localhost:8181/auth/register/confirm';

  constructor(private http: HttpClient) { }

  public confirm(token: string): Observable<IConfirmedUser> {
    const params = new HttpParams().set('activeToken', token)
    
    return this.http.get<IConfirmedUser>(
      this._url,
      { headers: new HttpHeaders('Content-Type:application/json'),  params: params }
    )
  }
}
