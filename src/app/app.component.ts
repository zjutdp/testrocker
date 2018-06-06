import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
// import { map, scan, filter } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Instant Search';
  searchTerm: string;
  results:any;

  constructor(private http: HttpClient){
  }

  newSearch(term){
    console.log(`new serach with term ${term}`)
    this.results = this.http.get(`https://developer.github.com/v3/search/q=${term}`);
    console.log(this.results);
    // .pipe(map(res => res.json().items.map(x => x.name)))
  } 
}
