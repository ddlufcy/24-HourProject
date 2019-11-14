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

  film: string = "";
  filmResponse: any;


  constructor(private http: HttpClient) { }
 ngOnInit(){}

  searchPeople() {
    this.http.get('https://swapi.co/api/people/?search=' + this.people)
      .subscribe((peopleResponse) => {
        this.peopleResponse = peopleResponse;
        console.log(this.peopleResponse)
      })
  }

  searchFilm() {
    this.http.get('https://swapi.co/api/films/?search=' + this.film)
      .subscribe((filmResponse) => {
        this.filmResponse = filmResponse;
        console.log(this.filmResponse)
      })
  }





 

}