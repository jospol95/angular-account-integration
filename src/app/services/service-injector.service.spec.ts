import { TestBed } from '@angular/core/testing';

import { ServiceInjectorService } from './service-injector.service';

describe('ServiceInjectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceInjectorService = TestBed.get(ServiceInjectorService);
    expect(service).toBeTruthy();
  });
});
