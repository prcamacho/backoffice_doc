import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketClientsComponent } from './gsb-market-clients.component';

describe('GsbMarketClientsComponent', () => {
  let component: GsbMarketClientsComponent;
  let fixture: ComponentFixture<GsbMarketClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketClientsComponent],
    });
    fixture = TestBed.createComponent(GsbMarketClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
