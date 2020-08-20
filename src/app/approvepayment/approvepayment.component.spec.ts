import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovepaymentComponent } from './approvepayment.component';

describe('ApprovepaymentComponent', () => {
  let component: ApprovepaymentComponent;
  let fixture: ComponentFixture<ApprovepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
