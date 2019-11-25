import { TestBed } from '@angular/core/testing';

import { PaymentProviderService } from './payment-provider.service';

describe('PaymentProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentProviderService = TestBed.get(PaymentProviderService);
    expect(service).toBeTruthy();
  });
});
