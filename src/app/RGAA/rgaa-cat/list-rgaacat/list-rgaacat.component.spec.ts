import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRgaacatComponent } from './list-rgaacat.component';

describe('ListRgaacatComponent', () => {
  let component: ListRgaacatComponent;
  let fixture: ComponentFixture<ListRgaacatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRgaacatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRgaacatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
