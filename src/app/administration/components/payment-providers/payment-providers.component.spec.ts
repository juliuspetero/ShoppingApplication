import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProvidersComponent } from './payment-providers.component';

describe('PaymentProvidersComponent', () => {
  let component: PaymentProvidersComponent;
  let fixture: ComponentFixture<PaymentProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
