import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeuiComponent } from './treeui.component';

describe('TreeuiComponent', () => {
  let component: TreeuiComponent;
  let fixture: ComponentFixture<TreeuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
