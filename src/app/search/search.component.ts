import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  keypressSubject = new Subject<any>();

  suggestions = [];

  companies = [
    'Berkshire Hathaway',
    'McKesson',
    'UnitedHealth Group',
    'CVS Health'
  ];

  constructor() {
    this.keypressSubject
      .map((word: string) => word.toLowerCase())
      .debounceTime(250)
      .do(word => this.suggestions = [])
      .filter(word => word !== '')
      .map((word: string) => {
        let suggestions = [];
        this.companies.forEach(option => {
          if (option.includes(word)) {
            suggestions.push(option);
          }
        });
        return suggestions;
      })
      .do(suggestions => console.log(suggestions))
      .subscribe(suggestions => this.suggestions = suggestions);
  }

  keypress() {
    this.keypressSubject.next(this.searchTerm);
  }

  fill(str) {
    this.searchTerm = str;
  }

  ngOnInit() {
  }

}
