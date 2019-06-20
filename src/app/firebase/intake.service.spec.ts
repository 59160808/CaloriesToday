import { TestBed } from '@angular/core/testing';

import { IntakeService } from './intake.service';

describe('IntakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntakeService = TestBed.get(IntakeService);
    expect(service).toBeTruthy();
  });
});
