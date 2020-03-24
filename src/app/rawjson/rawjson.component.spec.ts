import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawjsonComponent } from './rawjson.component';

describe('RawjsonComponent', () => {
  let component: RawjsonComponent;
  let fixture: ComponentFixture<RawjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
