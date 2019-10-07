import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifRgaaComponent } from './modif-rgaa.component';

describe('ModifRgaaComponent', () => {
  let component: ModifRgaaComponent;
  let fixture: ComponentFixture<ModifRgaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifRgaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifRgaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
