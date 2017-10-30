import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  searchResult = '';

  keypressSubject = new Subject<any>();

  suggestions = [];

  companies = [
    'Berkshire Hathaway',
    'McKesson',
    'UnitedHealth Group',
    'CVS Health'
  ];

  constructor(private searchService: SearchService) {

    this.keypressSubject
      .map((term: string) => term.toLowerCase())
      .debounceTime(250)
      .do(term => this.suggestions = [])
      .filter(term => term !== '')
      .map((term: string) => {
        let suggestions = [];
        this.companies.forEach(option => {
          if (option.includes(term)) {
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

  select(str) {
    this.searchTerm = str;
    this.searchService.getMockResult(this.searchTerm).subscribe(data => this.searchResult = data);
  }

  ngOnInit() {
  }

}
