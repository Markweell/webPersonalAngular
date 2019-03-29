import { TestBed } from '@angular/core/testing';

import { AccesoJSONService } from './acceso-json.service';

describe('AccesoJSONService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesoJSONService = TestBed.get(AccesoJSONService);
    expect(service).toBeTruthy();
  });
});
