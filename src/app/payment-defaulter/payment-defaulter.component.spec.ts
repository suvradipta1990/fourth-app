import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDefaulterComponent } from './payment-defaulter.component';

describe('PaymentDefaulterComponent', () => {
  let component: PaymentDefaulterComponent;
  let fixture: ComponentFixture<PaymentDefaulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDefaulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDefaulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
