import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserSignUpComponent } from './admin-user-sign-up.component';

describe('AdminUserSignUpComponent', () => {
  let component: AdminUserSignUpComponent;
  let fixture: ComponentFixture<AdminUserSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
