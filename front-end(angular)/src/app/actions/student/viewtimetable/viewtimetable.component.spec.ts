import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtimetableComponent } from './viewtimetable.component';

describe('ViewtimetableComponent', () => {
  let component: ViewtimetableComponent;
  let fixture: ComponentFixture<ViewtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
