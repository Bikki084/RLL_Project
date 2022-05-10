import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtimetableComponent } from './ftimetable.component';

describe('FtimetableComponent', () => {
  let component: FtimetableComponent;
  let fixture: ComponentFixture<FtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
