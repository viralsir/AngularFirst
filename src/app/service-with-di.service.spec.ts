import { TestBed } from '@angular/core/testing';

import { ServiceWithDIService } from './service-with-di.service';

describe('ServiceWithDIService', () => {
  let service: ServiceWithDIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWithDIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
