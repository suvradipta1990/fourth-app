import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentHistoryComponent } from './student-payment-history.component';

describe('StudentPaymentHistoryComponent', () => {
  let component: StudentPaymentHistoryComponent;
  let fixture: ComponentFixture<StudentPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
