import { TestBed } from '@angular/core/testing';

import { ToshareService } from './toshare.service';

describe('ToshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToshareService = TestBed.get(ToshareService);
    expect(service).toBeTruthy();
  });
});
