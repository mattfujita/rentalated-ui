import { Component, OnInit } from '@angular/core';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

  apartments: Apartment[];
  error: string;
  private selectedApartment: Apartment;

  constructor(private data: ApartmentDataService) { }

  selectApartment(apartment: Apartment) {
    this.selectedApartment = apartment;
  }

  hideApartment() {
    this.selectedApartment = null;
  }

  setActive() {
    this.data
      .setApartmentActivity(this.selectedApartment.id)
      .subscribe(
          apartment => this.selectedApartment.is_active = apartment.is_active,
          () => this.error = 'Could not update apartment data'
      );
    
  }


  ngOnInit() {
    this.data
      .getMyListings()
      .subscribe(
        apartments => this.apartments = apartments,
        () => this.error = 'Could not load apartment data'

      );
  }

}
