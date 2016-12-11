import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { AuthenticationService } from '../common/authentication.service.ts'
import gql from 'graphql-tag';

const CurrentUserForNavbar = gql`
  query CurrentUserForNavbar {
    self {
      username
    }
  }
`;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any;

  constructor(private apollo: Angular2Apollo, private authentication: AuthenticationService) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: CurrentUserForNavbar
    }).subscribe(({data}) => {
      this.currentUser = data.self;
    });
  }

  logout() {
    this.authentication.logout();
  }
}
