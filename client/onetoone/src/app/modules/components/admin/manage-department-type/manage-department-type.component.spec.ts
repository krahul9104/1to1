import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDepartmentTypeComponent } from './manage-department-type.component';

describe('ManageDepartmentTypeComponent', () => {
  let component: ManageDepartmentTypeComponent;
  let fixture: ComponentFixture<ManageDepartmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDepartmentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDepartmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
