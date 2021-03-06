import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApartmentListingsComponent } from './apartment-listings/apartment-listings.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ApartmentDataService } from './apartment-data/apartment-data.service';
import { SessionDataService } from './session-data/session-data.service';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { LoginComponent } from './login/login.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ApartmentsUsersDataService } from './apartments-users-data/apartments-users-data.service';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '',      component: ApartmentListingsComponent },
  { path: 'my-listings',      component: MyListingsComponent },
  { path: 'add-listings',      component: AddListingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ApartmentListingsComponent,
    NavigationComponent,
    ApartmentDetailComponent,
    LoginComponent,
    MyListingsComponent,
    AddListingComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ 
    ApartmentDataService, 
    SessionDataService ,
    ApartmentsUsersDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
