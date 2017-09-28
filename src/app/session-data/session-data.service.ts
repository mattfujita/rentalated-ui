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

  constructor(private http: Http, private router: Router) { 
    this.userChanged = new Subject<User>();
  }

  login(email: string, password: string): Observable<User> {

    const payload = { email, password }

    return this.http
      .post(this.baseUrl, payload, this.options)
      .map(response => response.status === 201 ? response.json() : null)
      .do(user => this.userChanged.next(user));
  }

  logout(): Observable<User> {
    return this.http
    .delete(`${this.baseUrl}/mine`, { withCredentials: true })
      .map(response => null) //finish the failure later
      .do(user => this.userChanged.next(user));
  }

}
