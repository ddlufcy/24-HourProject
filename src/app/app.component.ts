import { Component } from '@angular/core';
import { OnInit } from '@angular/core' 
import { People } from './people.model';
import { PeopleDataService } from './people-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people$: People[];
  
  constructor(private peopleData: PeopleDataService) {} 

  ngOnInit() {
    return this.peopleData.getPeople()
      .subscribe(data => this.people$ = data);
  }
}
