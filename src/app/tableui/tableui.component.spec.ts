import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableuiComponent } from './tableui.component';

describe('TableuiComponent', () => {
  let component: TableuiComponent;
  let fixture: ComponentFixture<TableuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
