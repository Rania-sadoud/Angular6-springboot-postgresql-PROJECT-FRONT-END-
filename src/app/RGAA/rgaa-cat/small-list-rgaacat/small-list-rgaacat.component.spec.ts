import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallListRgaacatComponent } from './small-list-rgaacat.component';

describe('SmallListRgaacatComponent', () => {
  let component: SmallListRgaacatComponent;
  let fixture: ComponentFixture<SmallListRgaacatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallListRgaacatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallListRgaacatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
