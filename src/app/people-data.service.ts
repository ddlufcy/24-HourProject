import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleDataService {
  apiURL ='http://swapi.co/api/people/1';

  constructor(private _http: HttpClient) { }

  getPeople() {
    return this._http.get<People[]>(this.apiURL)
  }
}
