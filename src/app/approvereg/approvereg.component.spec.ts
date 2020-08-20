import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveregComponent } from './approvereg.component';

describe('ApproveregComponent', () => {
  let component: ApproveregComponent;
  let fixture: ComponentFixture<ApproveregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
