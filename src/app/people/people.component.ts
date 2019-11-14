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

  constructor(private http: HttpClient) { }




<<<<<<< HEAD
    onfetch(){
  let response = this.http.get(`https://swapi.co/api/${this.selection}/${this.textInput}`);
    response.subscribe((data) =>this.swInfo.push(data))
    console.log(response);
   }
=======
>>>>>>> b942f8455649980a7af9e663e2d7520d56debc3b
  ngOnInit() {
    let response = this.http.get('https://swapi.co/api/people/1/')
    response.subscribe((data) => this.swInfo.push(data));
  }

}
