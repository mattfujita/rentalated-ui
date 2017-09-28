import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { User } from '../user';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  private number_of_bathrooms: number;
  private number_of_bedrooms: number;
  private square_footage: number;
  private address: string;
  private city: string;
  private state: string;
  private zip_code: string;
  private rent: number;
  private message: string;
  private error: string;
  private currentUser: User;

  constructor(private data: ApartmentDataService, private router: Router) { }

  addListing() {
    this.data
      .addApartment(this.number_of_bathrooms, this.number_of_bedrooms, this.square_footage, this.address, this.city, this.state, this.zip_code, this.rent)
      .subscribe(
        apartment => {
          if (apartment) {
            this.router.navigate(['/my-listings']);
          } else {
            this.message = 'Could not create an apartment';
          }
        },
           e => this.message = 'Uh Oh ' + e
        );
    
  }

  ngOnInit() {
  }

}
