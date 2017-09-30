import { TestBed, inject } from '@angular/core/testing';

import { ApartmentsUsersDataService } from './apartments-users-data.service';

describe('ApartmentsUsersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentsUsersDataService]
    });
  });

  it('should be created', inject([ApartmentsUsersDataService], (service: ApartmentsUsersDataService) => {
    expect(service).toBeTruthy();
  }));
});
