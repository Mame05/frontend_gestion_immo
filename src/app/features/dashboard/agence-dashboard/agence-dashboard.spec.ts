import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceDashboard } from './agence-dashboard';

describe('AgenceDashboard', () => {
  let component: AgenceDashboard;
  let fixture: ComponentFixture<AgenceDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenceDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(AgenceDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
