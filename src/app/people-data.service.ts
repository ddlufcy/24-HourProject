import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './people.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleDataService {
  apiURL ='https://swapi.co/api/people';

  
  constructor(private http: HttpClient) { }


  getPeople() : Observable<People[]> {
    console.log(People);
    return this.http.get<People[]>(this.apiURL)
  }
  
  findPeople() : void {
    
  }
}
