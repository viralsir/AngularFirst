import { TestBed } from '@angular/core/testing';

import { ServiceWithoutDIService } from './service-without-di.service';

describe('ServiceWithoutDIService', () => {
  let service: ServiceWithoutDIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWithoutDIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
