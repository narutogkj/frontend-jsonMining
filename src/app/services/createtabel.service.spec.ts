import { TestBed } from '@angular/core/testing';

import { CreatetabelService } from './createtabel.service';

describe('CreatetabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatetabelService = TestBed.get(CreatetabelService);
    expect(service).toBeTruthy();
  });
});
