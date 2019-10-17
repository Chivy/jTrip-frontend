import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../model/register';


var header = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _url: string = 'http://localhost:8181/auth/register';

  constructor(private http: HttpClient) { }
  
  public registerNewUser(register: Register): Observable<Register> {
    return this.http.post<Register>(
      this._url,
      JSON.stringify(register),
      { headers: new HttpHeaders('Content-Type:application/json') }
    )
  }
}
