import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieuiComponent } from './pieui.component';

describe('PieuiComponent', () => {
  let component: PieuiComponent;
  let fixture: ComponentFixture<PieuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
