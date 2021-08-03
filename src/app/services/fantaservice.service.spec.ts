import { TestBed } from '@angular/core/testing';

import { FantaserviceService } from './fantaservice.service';

describe('FantaserviceService', () => {
  let service: FantaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
