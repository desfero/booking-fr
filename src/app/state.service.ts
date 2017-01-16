import { Injectable } from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {
  private scheduleSubject: BehaviorSubject<Object>;
  private bookingSubject: BehaviorSubject<Object>;

  public schedule$: Observable<{ seats: Array<String> }>;
  public booking$: Observable<{ adults: number, childrens: number, seats: Array<String> }>;

  constructor() {
    this.scheduleSubject = new BehaviorSubject<Object>({});
    this.bookingSubject = new BehaviorSubject<Object>({});
    this.schedule$ = this.scheduleSubject.asObservable();
    this.booking$ = this.bookingSubject.asObservable();
  }

  changeBooking(value) {
    this.bookingSubject.next(value);
  }

  changeSchedule(value) {
    this.scheduleSubject.next(value);
  }
}
