import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadaruiComponent } from './radarui.component';

describe('RadaruiComponent', () => {
  let component: RadaruiComponent;
  let fixture: ComponentFixture<RadaruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadaruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadaruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
