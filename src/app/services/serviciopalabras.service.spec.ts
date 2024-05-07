import { TestBed } from '@angular/core/testing';

import { ServiciopalabrasService } from './serviciopalabras.service';

describe('ServiciopalabrasService', () => {
  let service: ServiciopalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciopalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
