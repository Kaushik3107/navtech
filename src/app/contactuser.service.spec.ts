import { TestBed } from '@angular/core/testing';

import { ContactuserService } from './contactuser.service';

describe('ContactuserService', () => {
  let service: ContactuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
