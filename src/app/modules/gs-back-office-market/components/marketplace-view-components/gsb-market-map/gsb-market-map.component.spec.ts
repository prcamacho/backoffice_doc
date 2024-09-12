import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketMapComponent } from './gsb-market-map.component';

describe('GsbMarketMapComponent', () => {
  let component: GsbMarketMapComponent;
  let fixture: ComponentFixture<GsbMarketMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketMapComponent],
    });
    fixture = TestBed.createComponent(GsbMarketMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
