import { TestBed } from '@angular/core/testing';

import { HowardsService } from './howards.service';

describe('HowardsService', () => {
  let service: HowardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
