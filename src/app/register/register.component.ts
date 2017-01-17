import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { Router } from '@angular/router';
import { AuthenticationService } from '../common/authentication.service.ts'
import gql from 'graphql-tag';

const registerUser = gql`
  mutation signup($name: String!, $surname: String!, $email: Email!, $password: Password!) {
    signup(name: $name, surname: $surname, email: $email, password: $password) {
      createdAt
    }
  }
`;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nameInput: string;
  surnameInput: string;
  emailInput: string;
  passwordInput: string;

  constructor(private apollo: Angular2Apollo,  private route: Router) { }

  newUser(name: string, surname: string, email: string, password: string) {
    this.apollo.mutate({
      mutation: registerUser,
      variables: {
        name, surname, email, password
      }
    }).subscribe(({ data }) => {
      this.route.navigate(['/login']);
    }, error => {
      console.log('there was an error sending the query', error);
    });
  }
}


