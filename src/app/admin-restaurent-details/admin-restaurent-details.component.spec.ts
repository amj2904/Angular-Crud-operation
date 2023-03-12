import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestaurentDetailsComponent } from './admin-restaurent-details.component';

describe('AdminRestaurentDetailsComponent', () => {
  let component: AdminRestaurentDetailsComponent;
  let fixture: ComponentFixture<AdminRestaurentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestaurentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestaurentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
