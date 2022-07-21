import { TestBed } from '@angular/core/testing';

import { VehicleurlService } from './vehicleurl.service';

describe('VehicleurlService', () => {
  let service: VehicleurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
