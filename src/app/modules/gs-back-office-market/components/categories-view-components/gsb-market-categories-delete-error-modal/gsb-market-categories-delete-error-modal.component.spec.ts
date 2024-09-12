import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketCategoriesDeleteErrorModalComponent } from './gsb-market-categories-delete-error-modal.component';

describe('GsbMarketCategoriesDeleteErrorModalComponent', () => {
  let component: GsbMarketCategoriesDeleteErrorModalComponent;
  let fixture: ComponentFixture<GsbMarketCategoriesDeleteErrorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketCategoriesDeleteErrorModalComponent]
    });
    fixture = TestBed.createComponent(GsbMarketCategoriesDeleteErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
