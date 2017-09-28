import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  @Input()
  apartment: Apartment;

  constructor(private data: ApartmentDataService) { }

  ngOnInit() {
  }

  

}
