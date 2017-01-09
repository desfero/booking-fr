import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent }  from './search/search.component';
import { MyProfileComponent }  from './my-profile/my-profile.component';
import { SeatsComponent }  from './seats/seats.component';
import { CalendarComponent }  from './calendar/calendar.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search',  component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'seats', component: SeatsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

