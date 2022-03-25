import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLandingComponent } from './admin-dashboard-landing.component';

describe('AdminDashboardLandingComponent', () => {
  let component: AdminDashboardLandingComponent;
  let fixture: ComponentFixture<AdminDashboardLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
