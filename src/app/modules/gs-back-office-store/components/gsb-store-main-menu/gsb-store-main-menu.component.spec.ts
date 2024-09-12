import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbStoreMainMenuComponent } from './gsb-store-main-menu.component';

describe('GsbStoreMainMenuComponent', () => {
  let component: GsbStoreMainMenuComponent;
  let fixture: ComponentFixture<GsbStoreMainMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbStoreMainMenuComponent],
    });
    fixture = TestBed.createComponent(GsbStoreMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
