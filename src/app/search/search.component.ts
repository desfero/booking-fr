import { Component, OnInit } from '@angular/core';
import { SearchModel } from "./search.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  model: SearchModel;

  constructor() { }

  ngOnInit() {
    this.model = new SearchModel();
  }

  onSubmit() {
    console.log(this.model);
  }
}
