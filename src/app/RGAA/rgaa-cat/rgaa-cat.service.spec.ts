import { TestBed } from '@angular/core/testing';

import { RgaaCatService } from './rgaa-cat.service';

describe('RgaaCatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgaaCatService = TestBed.get(RgaaCatService);
    expect(service).toBeTruthy();
  });
});
