import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPlaneComponent } from './right-plane.component';

describe('RightPlaneComponent', () => {
  let component: RightPlaneComponent;
  let fixture: ComponentFixture<RightPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
