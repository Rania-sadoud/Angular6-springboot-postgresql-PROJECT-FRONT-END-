import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRgaacatComponent } from './details-rgaacat.component';

describe('DetailsRgaacatComponent', () => {
  let component: DetailsRgaacatComponent;
  let fixture: ComponentFixture<DetailsRgaacatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsRgaacatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRgaacatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
