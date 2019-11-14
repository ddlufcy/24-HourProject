import { Component} from '@angular/core';
import { OnInit } from '@angular/core' 
import { People } from './people'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiURL='https://swapi.co/api/';
  items= [];
  people='';
  ships='';
  films= '';
  

  constructor(private http: HttpClient) {
    this.http.get(this.apiURL).toPromise().then(data =>{
      console.log(data);

      for (let key in data)
      if (data.hasOwnProperty(key))
        this.items.push(data[key]);
    });
  } 

  OnInit(){}
  
}
