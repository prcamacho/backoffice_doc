import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GsbStoreMostViewedProductsComponent } from './gsb-store-most-viewed-products.component';

describe('GsbStoreMostViewedProductsComponent', () => {
  let component: GsbStoreMostViewedProductsComponent;
  let fixture: ComponentFixture<GsbStoreMostViewedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbStoreMostViewedProductsComponent],
    });
    fixture = TestBed.createComponent(GsbStoreMostViewedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
