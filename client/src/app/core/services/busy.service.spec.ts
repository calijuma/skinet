/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusyService } from './busy.service';

describe('Service: Busy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusyService]
    });
  });

  it('should ...', inject([BusyService], (service: BusyService) => {
    expect(service).toBeTruthy();
  }));
});
