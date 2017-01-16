import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
import { StateService } from '../state.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  private booking: any;
  public selectedSeats: Array<String>;
  public numberOfPassengers$: Observable<number>;
  public seats$: Observable<String[]>;

  constructor(private route: Router, private stateService: StateService) {}

  ngOnInit() {
    this.selectedSeats = [];
    this.numberOfPassengers$ = this.stateService.booking$.map(b => b.adults + b.childrens);
    this.seats$ = this.stateService.schedule$.map(b => b.seats);

    this.stateService.booking$.subscribe(booking => {
      this.booking = booking
    });
  }

  next() {
    this.stateService.changeBooking(Object.assign({}, this.booking, { seats: this.selectedSeats }));
    this.route.navigate(['/payment']);
  }
}
