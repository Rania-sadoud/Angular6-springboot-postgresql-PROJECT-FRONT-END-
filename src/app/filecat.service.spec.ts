import { TestBed } from '@angular/core/testing';

import { FilecatService } from './filecat.service';

describe('FilecatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilecatService = TestBed.get(FilecatService);
    expect(service).toBeTruthy();
  });
});
