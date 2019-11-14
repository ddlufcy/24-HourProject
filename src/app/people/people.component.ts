import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  textInput = "";
  selection = "";

  swInfo= [];
  
  constructor(private http:HttpClient) { }

    onfetch(){
  let response = this.http.get(`https://swapi.co/api/${this.selection}/${this.textInput}`);
    response.subscribe((data) =>this.swInfo.push(data))
   }
  ngOnInit() {
   
  }

}
