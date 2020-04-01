import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootomSheetComponent } from './bootom-sheet.component';

describe('BootomSheetComponent', () => {
  let component: BootomSheetComponent;
  let fixture: ComponentFixture<BootomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
