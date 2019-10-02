import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly uri = 'http://localhost:3000/api/';

  selectedUser: User;

  users: User[];

  constructor( private http: HttpClient) {

    this.selectedUser = new User();

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

}
