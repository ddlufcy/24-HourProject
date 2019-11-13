import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  apiURL ='https://swapi.co/api/people';
  constructor(private http: HttpClient) { }
  getPeople() : Observable<People[]> {
    console.log(People);
    return this.http.get<People[]>(this.apiURL)
  }
  findPeople() : void {
  }
}
