import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import { SearchModel } from "./search.model";
import gql from 'graphql-tag';
import * as moment from 'moment';
import * as _ from 'lodash';

const Schedules = gql`
  query Schedules {
    schedules {
      _id,
	    departure,
	    arrival,
	    from,
	    to
  	}
  }
`;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private model: SearchModel;
  schedules: Array<any>;
  schedulesTo: Array<any>;
  schedulesDeparture: Array<any>;
  schedulesDepartureFormatted: Array<any>;
  schedulesArrival: Array<any>;
  schedulesArrivalFormatted: Array<any>;

  constructor(private router: Router, private apollo: Angular2Apollo) { }

  ngOnInit() {
    this.model = new SearchModel();

    this.apollo.watchQuery({
      query: Schedules
    }).subscribe(({data}) => {
      this.schedules = data.schedules;
    });
  }

  onSubmit() {
    let link = ['/seats', this.model];
    this.router.navigate(link);
  }

  get selectedFrom() {
    return this.model.from;
  }

  set selectedFrom(value) {
    this.model.from = value;

    this.schedulesTo = this.schedules.filter(s => s.from === value);
  }

  get selectedTo() {
    return this.model.to;
  }

  set selectedTo(value) {
    this.model.to = value;

    this.schedulesDeparture = this.schedulesTo
        .filter(s => s.to === value);

    this.schedulesDepartureFormatted = _(this.schedulesDeparture)
      .map(s => moment(s.departure).format('DD-MM-YYYY'))
      .uniq()
      .value();
  }

  get selectedDeparture() {
    return this.model.departure;
  }

  set selectedDeparture(value) {
    this.model.departure = value;

    this.schedulesArrival = this.schedulesDeparture
      .filter(s => moment(s.departure).isSame(value, 'day'));

    this.schedulesArrivalFormatted = _(this.schedulesArrival)
      .map(s => moment(s.arrival).format('DD-MM-YYYY'))
      .uniq()
      .value();
  }
}
