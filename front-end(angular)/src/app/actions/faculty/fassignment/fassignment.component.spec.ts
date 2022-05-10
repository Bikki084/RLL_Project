import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FassignmentComponent } from './fassignment.component';

describe('FassignmentComponent', () => {
  let component: FassignmentComponent;
  let fixture: ComponentFixture<FassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
