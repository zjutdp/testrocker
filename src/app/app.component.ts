import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Instant Search';

  searchTerm: string;

  newSearch(term){
    console.log(`new serach with term ${term}`)
  }
  
}
