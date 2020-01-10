import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntendantComponent } from './intendant.component';

describe('IntendantComponent', () => {
  let component: IntendantComponent;
  let fixture: ComponentFixture<IntendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
