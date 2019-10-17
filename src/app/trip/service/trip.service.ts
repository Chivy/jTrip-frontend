import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../model/Trip';


var header = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class TripService {

  private _url: string = 'http://localhost:8181/trips';

  constructor(private http: HttpClient) { }

  public createTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(
      this._url,
      JSON.stringify(trip),
      { headers: new HttpHeaders('Content-Type:application/json') }
    )
  }
}
