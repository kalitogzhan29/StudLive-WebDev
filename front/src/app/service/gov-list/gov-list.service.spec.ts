import { TestBed } from '@angular/core/testing';

import { GovListService } from './gov-list.service';

describe('GovListService', () => {
  let service: GovListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
