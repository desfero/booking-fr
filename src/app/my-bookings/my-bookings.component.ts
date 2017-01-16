import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';
import * as moment from 'moment';
import * as _ from 'lodash';
import { StateService } from '../state.service';

const Bookings = gql `
  query Bookings {
    bookings {
      _id,
      schedule {
        departure,
        arrival,
        from,
        to,
        price,
      },
      adults,
      childrens,
      infants,
      seats,
    }
  }
`;

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
  bookings$: Observable<any>;

  constructor(private apollo:Angular2Apollo) {
  }

  ngOnInit() {
    this.bookings$ = this.apollo.watchQuery({
      query: Bookings
    }).map(({data}) => data.bookings);
  }
}

