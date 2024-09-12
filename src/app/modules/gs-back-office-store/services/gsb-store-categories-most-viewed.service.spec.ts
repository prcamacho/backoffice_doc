import { TestBed } from '@angular/core/testing';

import { GsbStoreCategoriesMostViewedService } from './gsb-store-categories-most-viewed.service';

describe('GsbStoreCategoriesMostViewedService', () => {
  let service: GsbStoreCategoriesMostViewedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsbStoreCategoriesMostViewedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
