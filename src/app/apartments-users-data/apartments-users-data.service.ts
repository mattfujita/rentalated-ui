import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';
import { Apartmentsusers } from '../apartmentsusers';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApartmentsUsersDataService {

  options = { withCredentials: true};

  constructor(private http: Http) { }

  getLikes(apartment_id: number ): Observable<any []> {

    const payload = { apartment_id }

    return this.http
      .post('http://localhost:4567/api/apartments/like', payload, this.options)
      .map(response => response.json());
  }

}
