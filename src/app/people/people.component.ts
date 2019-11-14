import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  people= [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get('https://swapi.co/api/people/1/');
    response.subscribe((data) =>this.people.push(data))
  }

}
