import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbStoreCardsCategoriesMostViewedComponent } from './gsb-store-cards-categories-most-viewed.component';

describe('GsbStoreCardsCategoriesMostViewedComponent', () => {
  let component: GsbStoreCardsCategoriesMostViewedComponent;
  let fixture: ComponentFixture<GsbStoreCardsCategoriesMostViewedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbStoreCardsCategoriesMostViewedComponent],
    });
    fixture = TestBed.createComponent(
      GsbStoreCardsCategoriesMostViewedComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
