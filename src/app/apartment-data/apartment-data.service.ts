import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Apartment } from '../apartment';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { User } from '../user';

@Injectable()
export class ApartmentDataService {

  options = { withCredentials: true };

  apartmentChanged: Subject<Apartment>;

  constructor(private http: Http) {
    this.apartmentChanged = new Subject<Apartment>();

   }

  getActiveListings(): Observable<Apartment[]> {
    return this.http
      .get('http://localhost:4567/api/apartments')
      .map(response => response.json());
  }

  getMyListings(): Observable<Apartment[]> {
    return this.http
    .get('http://localhost:4567/api/apartments/mine', this.options)
    .map(response => response.json());
  }

  setApartmentActivity(id: number): Observable<Apartment> {
    
        const payload = { id }
    
        return this.http
          .post('http://localhost:4567/api/apartments/activations', payload, this.options)
          .map(response => response.json());
          // .do(apartment => this.apartmentChanged.next(apartment));
  }

  addApartment(number_of_bathrooms: number, number_of_bedrooms: number, square_footage: number, address: string, city: string, state: string, zip_code: string, rent: number): Observable<Apartment> {

    const payload = { number_of_bathrooms, number_of_bedrooms, square_footage, address, city, state, zip_code, rent }

    return this.http
      .post('http://localhost:4567/api/apartments', payload, this.options)
      .map(response => response.json());

  }

  createLike(apartment_id: number): Observable<Apartment> {

    const payload = { apartment_id }

    return this.http
      .post('http://localhost:4567/api/apartments/like', payload, this.options)
      .map(response => response.json());

  }

}
