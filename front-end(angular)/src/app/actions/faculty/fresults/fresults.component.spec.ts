import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresultsComponent } from './fresults.component';

describe('FresultsComponent', () => {
  let component: FresultsComponent;
  let fixture: ComponentFixture<FresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
