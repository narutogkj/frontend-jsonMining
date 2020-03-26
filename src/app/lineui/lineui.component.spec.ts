import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineuiComponent } from './lineui.component';

describe('LineuiComponent', () => {
  let component: LineuiComponent;
  let fixture: ComponentFixture<LineuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
