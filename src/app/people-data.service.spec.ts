import { TestBed } from '@angular/core/testing';

import { PeopleDataService } from './people-data.service';

describe('PeopleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleDataService = TestBed.get(PeopleDataService);
    expect(service).toBeTruthy();
  });
});
