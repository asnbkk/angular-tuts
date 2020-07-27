import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSutdentComponent } from './child-sutdent.component';

describe('ChildSutdentComponent', () => {
  let component: ChildSutdentComponent;
  let fixture: ComponentFixture<ChildSutdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSutdentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSutdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
