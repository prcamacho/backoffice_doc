import { TestBed } from '@angular/core/testing';

import { GsbStoreMostViewProductsService } from './gsb-store-most-view-products.service';

describe('GsbStoreMostViewProductsService', () => {
  let service: GsbStoreMostViewProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsbStoreMostViewProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
