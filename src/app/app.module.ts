import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApolloModule } from 'angular2-apollo';
import { client } from './app.apollo-client';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AuthenticationService } from './common/authentication.service.ts';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RegisterComponent } from './register/register.component';
import { SeatsComponent } from './seats/seats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    NavbarComponent,
    MyProfileComponent,
    RegisterComponent,
    SeatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ApolloModule.withClient(client)
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
