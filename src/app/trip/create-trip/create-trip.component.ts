import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../model/Trip';
import { TripService } from '../service/trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html'
})
export class CreateTripComponent implements OnInit {

  public trip: Trip = new Trip('', '', '', false, '', '', 0, 0, 0, 0);

  constructor(public router: Router, public tripService: TripService) { }

  ngOnInit() {
  }
  
  public createTrip() {
    this.trip.startDate = (<HTMLInputElement>document.getElementById('tripStartDateInputId')).value + ':00.000Z';
    this.trip.endDate = (<HTMLInputElement>document.getElementById('tripEndDateInputId')).value + ':00.000Z';
    
    this.tripService.createTrip(this.trip)
      .subscribe((data: {}) => {
        this.router.navigate(['/'])
      })
  }

  public cancelCreation() {
    this.router.navigate(['/'])
  }
}