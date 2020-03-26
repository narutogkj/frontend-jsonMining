import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaruiComponent } from './barui.component';

describe('BaruiComponent', () => {
  let component: BaruiComponent;
  let fixture: ComponentFixture<BaruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
