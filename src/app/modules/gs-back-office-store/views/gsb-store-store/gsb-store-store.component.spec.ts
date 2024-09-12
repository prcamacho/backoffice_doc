import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsbStoreStoreComponent } from './gsb-store-store.component';

describe('GsbStoreStoreComponent', () => {
  let component: GsbStoreStoreComponent;
  let fixture: ComponentFixture<GsbStoreStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsbStoreStoreComponent],
    });
    fixture = TestBed.createComponent(GsbStoreStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
