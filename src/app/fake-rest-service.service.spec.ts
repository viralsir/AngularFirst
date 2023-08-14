import { TestBed } from '@angular/core/testing';

import { FakeRestServiceService } from './fake-rest-service.service';

describe('FakeRestServiceService', () => {
  let service: FakeRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
