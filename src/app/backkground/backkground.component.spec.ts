import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackkgroundComponent } from './backkground.component';

describe('BackkgroundComponent', () => {
  let component: BackkgroundComponent;
  let fixture: ComponentFixture<BackkgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackkgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackkgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
