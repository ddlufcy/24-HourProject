import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  // textInput = "";
  // selection = "";

  swInfo:any = [];
 people: string = '';

  constructor(private http: HttpClient) { }
 ngOnInit(){}



  getPeople(){
    let response = this.http.get('https://swapi.co/api/people/?search=' + this.people)
    response.subscribe((data) => this.swInfo.push(data));
  }

}