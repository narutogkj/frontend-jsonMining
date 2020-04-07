import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsuiComponent } from './statisticsui.component';

describe('StatisticsuiComponent', () => {
  let component: StatisticsuiComponent;
  let fixture: ComponentFixture<StatisticsuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
