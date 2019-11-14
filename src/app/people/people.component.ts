import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectComponent } from '../select/select.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
@Injectable()
export class PeopleComponent implements OnInit {
  // textInput = "";
  // selection = "";

  swInfo:any = [];

  constructor(private http: HttpClient) { }

  peopleUrl = `https://swapi.co/api/people/`

  getPeople() {
    return this.http.get(this.peopleUrl);
  }


  ngOnInit() {
    let response = this.http.get(`https://swapi.co/api/people`)
    response.subscribe((data) => this.swInfo.push(data));
  }

}
