import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispersionComponent } from './dispersion.component';

describe('DispersionComponent', () => {
  let component: DispersionComponent;
  let fixture: ComponentFixture<DispersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
