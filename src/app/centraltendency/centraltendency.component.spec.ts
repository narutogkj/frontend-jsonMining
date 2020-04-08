import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraltendencyComponent } from './centraltendency.component';

describe('CentraltendencyComponent', () => {
  let component: CentraltendencyComponent;
  let fixture: ComponentFixture<CentraltendencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentraltendencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentraltendencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
