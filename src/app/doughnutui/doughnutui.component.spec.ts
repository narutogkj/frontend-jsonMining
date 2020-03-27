import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutuiComponent } from './doughnutui.component';

describe('DoughnutuiComponent', () => {
  let component: DoughnutuiComponent;
  let fixture: ComponentFixture<DoughnutuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
