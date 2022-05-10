import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvieweventComponent } from './fviewevent.component';

describe('FvieweventComponent', () => {
  let component: FvieweventComponent;
  let fixture: ComponentFixture<FvieweventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvieweventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
