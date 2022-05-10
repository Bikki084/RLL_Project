import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvieweventComponent } from './lviewevent.component';

describe('LvieweventComponent', () => {
  let component: LvieweventComponent;
  let fixture: ComponentFixture<LvieweventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvieweventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
