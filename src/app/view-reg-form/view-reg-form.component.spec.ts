import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegFormComponent } from './view-reg-form.component';

describe('ViewRegFormComponent', () => {
  let component: ViewRegFormComponent;
  let fixture: ComponentFixture<ViewRegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
