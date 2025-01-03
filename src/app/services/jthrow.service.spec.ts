import { TestBed } from '@angular/core/testing';

import { JthrowService } from './jthrow.service';

describe('JthrowService', () => {
  let service: JthrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JthrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
