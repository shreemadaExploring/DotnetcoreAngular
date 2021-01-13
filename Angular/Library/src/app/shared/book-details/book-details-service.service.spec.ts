import { TestBed } from '@angular/core/testing';

import { BookDetailsServiceService } from './book-details-service.service';

describe('BookDetailsServiceService', () => {
  let service: BookDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
