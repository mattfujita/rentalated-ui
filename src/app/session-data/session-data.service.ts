import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { User } from '../user';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class SessionDataService {

  baseUrl = 'http://localhost:4567/api/sessions';
  options = { withCredentials: true };

  userChanged: Subject<User>;
  currentUser: User;

  constructor(private http: Http, private router: Router) { 
    this.userChanged = new Subject<User>();

    //this.verifyUser();

  }

  login(email: string, password: string): Observable<User> {

    const payload = { email, password }

    return this.http
      .post(this.baseUrl, payload, this.options)
      .map(response => response.status === 201 ? response.json() : null)
      .do(user => this.userChanged.next(user))
      .do(user => this.currentUser = user);
  }

  logout(): Observable<User> {
    return this.http
    .delete(`${this.baseUrl}/mine`, { withCredentials: true })
      .map(response => null) //finish the failure later
      .do(user => this.userChanged.next(user))
      .do(user => this.currentUser = null);
  }

  addAUser(email: string, password: string, first_name: string, last_name: string): Observable<User> {

    const payload = { email, password, first_name, last_name }

    return this.http
      .post('http://localhost:4567/api/users', payload, this.options)
      .map(response => response.status === 201 ? response.json() : null)
      .do(user => this.userChanged.next(user))
      .do(user => this.currentUser = user);

  }

  verifyUser() {
    return this.http
      .get(`${this.baseUrl}/mine`, this.options)
      .map(response => response === null ? null : response.json())
       
        .do(user => { 
          if (user != null) {
            this.currentUser = user
          }
        })
      .do(user => console.log(user));
  }

}
