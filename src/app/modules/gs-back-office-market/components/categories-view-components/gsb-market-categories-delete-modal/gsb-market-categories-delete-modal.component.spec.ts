import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbMarketCategoriesDeleteModalComponent } from './gsb-market-categories-delete-modal.component';

describe('GsbMarketCategoriesDeleteModalComponent', () => {
  let component: GsbMarketCategoriesDeleteModalComponent;
  let fixture: ComponentFixture<GsbMarketCategoriesDeleteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbMarketCategoriesDeleteModalComponent]
    });
    fixture = TestBed.createComponent(GsbMarketCategoriesDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
