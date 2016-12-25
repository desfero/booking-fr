import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { SearchModel } from "./search.model";
import gql from 'graphql-tag';

const Schedules = gql`
  query Schedules {
    schedules {
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

  constructor(private apollo: Angular2Apollo) { }

  ngOnInit() {
    this.model = new SearchModel();

    this.apollo.watchQuery({
      query: Schedules
    }).subscribe(({data}) => {
      this.schedules = data.schedules;
    });
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
  }

  get selectedDeparture() {
   return this.model.departure;
  }

  set selectedDeparture(value) {
    this.model.departure = value;
  }

  get selectedArrival() {
    return this.model.arrival;
  }

  set selectedArrival(value) {
    this.model.arrival = value;
  }

  onSubmit() {
    console.log(this.model);
  }
}
