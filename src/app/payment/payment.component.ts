import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';
import { StateService } from '../state.service';

const createBooking = gql`
  mutation createBooking($schedule: ID!) {
    createBooking(schedule: $schedule) {
      _id
    }
  }
`;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private schedule: any;
  private booking: any;


  constructor(private state: StateService, private router: Router, private apollo: Angular2Apollo) { }

  ngOnInit() {
    this.state.schedule$.subscribe(schedule => this.schedule = schedule);
    this.state.booking$.subscribe(booking => {
      this.booking = booking;
      console.log(booking);
    });
  }

  book() {
    this.apollo.mutate({
      mutation: createBooking,
      variables: {
        schedule: this.schedule._id,
      }
    }).subscribe(() => {
      this.router.navigate(['/my-bookings'])
    })
  }
}
