import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuditionRegistrationComponent } from './pre-audition-registration.component';

describe('PreAuditionRegistrationComponent', () => {
  let component: PreAuditionRegistrationComponent;
  let fixture: ComponentFixture<PreAuditionRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAuditionRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuditionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
