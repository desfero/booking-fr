import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class AuthenticationService {
  private LOGIN_URL = `${environment.API_URL}/login`;
  private LOGOUT_URL = `${environment.API_URL}/logout`;

  constructor(private http: Http) { }

  login(username, password): Promise<void>  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(this.LOGIN_URL, JSON.stringify({
        username,
        password
      }), {
        headers: headers
      })
      .toPromise()
      .catch(this.handleError);
  }

  logout(): Promise<void> {
    return this.http
      .get(this.LOGOUT_URL)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
