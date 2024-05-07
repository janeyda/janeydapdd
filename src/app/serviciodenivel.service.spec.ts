import { TestBed } from '@angular/core/testing';

import { ServiciodenivelService } from './serviciodenivel.service';

describe('ServiciodenivelService', () => {
  let service: ServiciodenivelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciodenivelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
