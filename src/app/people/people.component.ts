import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: string = "";
  // selection = "";
  peopleResponse: any;
  // swInfo: any = [];

  constructor(private http: HttpClient) { }

  searchPeople() {
    this.http.get('https://swapi.co/api/people/?search=' + this.people)
      .subscribe((peopleResponse) => {
        this.peopleResponse = peopleResponse;
        console.log(this.peopleResponse)
      })
  }



  ngOnInit() { }


}
