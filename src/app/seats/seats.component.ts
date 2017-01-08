import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
import { StateService } from '../state.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  public adultsSeats: Array<String>;
  public adults$: Observable<Number>;
  public childrens$: Observable<Number>;
  public seats$: Observable<String>;

  constructor(private route: ActivatedRoute, private stateService: StateService) {}

  ngOnInit() {
    this.adultsSeats = [];
    this.adults$ = this.stateService.booking$.map(b => b.adults);
    this.childrens$ = this.stateService.booking$.map(b => b.childrens);
    this.seats$ = this.stateService.schedule$.map(b => b.seats);
  }

  next() {

  }
}
