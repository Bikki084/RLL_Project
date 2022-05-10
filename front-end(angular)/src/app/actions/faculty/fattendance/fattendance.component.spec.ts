import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattendanceComponent } from './fattendance.component';

describe('FattendanceComponent', () => {
  let component: FattendanceComponent;
  let fixture: ComponentFixture<FattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
