import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketplaceInfoComponent } from './gsb-marketplace-info.component';

describe('GsbMarketplaceInfoComponent', () => {
  let component: GsbMarketplaceInfoComponent;
  let fixture: ComponentFixture<GsbMarketplaceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketplaceInfoComponent]
    });
    fixture = TestBed.createComponent(GsbMarketplaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
