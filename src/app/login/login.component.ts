import { Component  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../common/authentication.service.ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  backendErrorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    this.resetErrorMessage();

    this.authenticationService
      .login(email, password)
      .then(() => this.goToSearch())
      .catch((message: string) => this.setErrorMessage(message))
  }

  setErrorMessage(message: string) {
    this.backendErrorMessage = message;
  }

  resetErrorMessage() {
    this.backendErrorMessage = "";
  }

  goToSearch() {
    let link = ['/search'];
    this.router.navigate(link);
  }
}
