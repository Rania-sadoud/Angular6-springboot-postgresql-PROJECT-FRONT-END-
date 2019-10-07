import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRgaaComponent } from './add-rgaa.component';

describe('AddRgaaComponent', () => {
  let component: AddRgaaComponent;
  let fixture: ComponentFixture<AddRgaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRgaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRgaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
