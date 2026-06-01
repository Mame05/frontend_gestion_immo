import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBien } from './add-bien';

describe('AddBien', () => {
  let component: AddBien;
  let fixture: ComponentFixture<AddBien>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBien],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBien);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
