import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { House } from '../models/house';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly uri = 'http://localhost:3000/api/';

  selectedUser: User;

  constructor( private http: HttpClient) {

    this.selectedUser = new User(); // No se yo si sera prescindible...

  }

  // User functions

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.uri + 'users/');
  }

  postUser( user: User ) {
    console.log('Llamando al back');
    return this.http.post<User[]>(this.uri + 'users/', user);
  }

  putUser( user: User) {
    return this.http.put<User[]>(this.uri + 'users/', user );
  }

  deleteUser( user: User) {
    return this.http.delete( this.uri + 'users/' + `${user.getId()}`);
  }

  // House functions

  getHouses(): Observable<User[]> {

    return this.http.get<User[]>(this.uri + 'houses/');
  }

  postHouse( house: House ) {
    console.log('Llamando al back');
    return this.http.post<User[]>(this.uri + 'houses/', house);
  }

  putHouse( house: House ) {
    return this.http.put<User[]>(this.uri + 'houses/', house );
  }

  deleteHouse( house: House ) {
    return this.http.delete( this.uri + 'houses/' + `${house.getId()}`);
  }

}
