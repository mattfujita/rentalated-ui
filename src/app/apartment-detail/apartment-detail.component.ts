import { Component, OnInit, Input, Output } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { EventEmitter } from 'events';
import { SessionDataService } from '../session-data/session-data.service';
import { User } from '../user';
import { Apartmentsusers } from '../apartmentsusers';
import { ApartmentsUsersDataService } from '../apartments-users-data/apartments-users-data.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  @Input()
  apartment: Apartment;

  private currentUser: User;
  private aptUsers: Apartmentsusers;
  private aptLikes: number;

  error: string;

  constructor(private data: ApartmentDataService, private service: SessionDataService, private aptUser: ApartmentsUsersDataService) { }

  atUser() {
    if(this.currentUser == null ) {
      return true;
    }
    return false;
  }

  hasLiked() {
    if (this.currentUser != null) {
      if (this.currentUser.id === this.apartment.user_id) {
        return true;
      }
    }
    return false;
  }

  liked() {
    this.data
    .createLike(this.apartment.id)
    .subscribe(
        apartment => this.apartment = apartment,
        () => this.error = 'Could not like apartment'
    );
  }

  getLikeCount() {
    this.aptUser
      .getLikes(this.apartment.id)
      .subscribe(aptLikes => this.aptLikes = aptLikes.length)
  }
 
  ngOnInit() {
    // this.service
    // .verifyUser()
    // .subscribe(user => this.currentUser = user);

    this.service 
    .userChanged
    .subscribe(user => this.currentUser = user);
  
    this.currentUser = this.service.currentUser;

    // this.data
    // .getDetails()
    // .subscribe(apartment => this.apartment = apartment);
  }
}
