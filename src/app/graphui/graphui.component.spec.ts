import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphuiComponent } from './graphui.component';

describe('GraphuiComponent', () => {
  let component: GraphuiComponent;
  let fixture: ComponentFixture<GraphuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
