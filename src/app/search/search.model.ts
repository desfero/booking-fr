import * as moment from 'moment';

export class SearchModel {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  adults: number;
  childrens: number;
  infants: number;

  constructor() {
    this.from = "";
    this.to = "";
    this.departure = "";
    this.arrival = "";
    this.adults = 1;
    this.childrens = 0;
    this.infants = 0;
  }

  setDeparture(value) {
    this.departure = moment(value).format('YYYY-MM-DD');
  }

  setArrival(value) {
    this.arrival = moment(value).format('YYYY-MM-DD');
  }
}
