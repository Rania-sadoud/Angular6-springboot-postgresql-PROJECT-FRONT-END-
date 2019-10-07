import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgaaInfosFinaleComponent } from './rgaa-infos-finale.component';

describe('RgaaInfosFinaleComponent', () => {
  let component: RgaaInfosFinaleComponent;
  let fixture: ComponentFixture<RgaaInfosFinaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgaaInfosFinaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgaaInfosFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
