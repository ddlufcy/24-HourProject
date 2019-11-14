import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: string = "";
  ships: string= "";
  films: string= "";
  // selection = "";
  peopleResponse: any;
  shipResponse: any;
  filmResponse: any;
  selection:any = "";
  // swInfo: any = [];

  constructor(private http: HttpClient) { }

  searchPeople() {
    this.http.get('https://swapi.co/api/people/?search=' + this.people)
      .subscribe((peopleResponse) => {
        this.peopleResponse = peopleResponse;
        console.log(this.peopleResponse)
      })
  }
  searchShips() {
    this.http.get('https://swapi.co/api/starships/?search=' + this.ships)
      .subscribe((shipResponse) => {
        this.shipResponse = shipResponse;
        console.log(this.shipResponse)
      })
  }
  searchFilms() {
    this.http.get('https://swapi.co/api/films/?search=' + this.films)
      .subscribe((filmResponse) => {
        this.filmResponse = filmResponse;
        console.log(this.filmResponse)
      })
  }



  ngOnInit() { }


}
