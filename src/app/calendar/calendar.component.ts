import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import { StateService } from '../state.service';

import gql from 'graphql-tag';

const Schedules = gql`
  query Schedules {
    schedules {
      _id,
	    departure,
	    arrival,
	    from,
	    to,
	    price,
	    seats,
  	}
  }
`;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router, private apollo: Angular2Apollo, private stateService: StateService) {}
  // TODO: handle seat select logic
  ngOnInit() {
    this.apollo.watchQuery({
      query: Schedules
    }).subscribe(({data}) => {
      this.stateService.changeSchedule(data.schedules[0]);
      this.router.navigate(['/seats'])
    });
  }
}
