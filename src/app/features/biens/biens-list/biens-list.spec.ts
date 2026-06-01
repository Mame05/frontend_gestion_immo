import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiensList } from './biens-list';

describe('BiensList', () => {
  let component: BiensList;
  let fixture: ComponentFixture<BiensList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiensList],
    }).compileComponents();

    fixture = TestBed.createComponent(BiensList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
