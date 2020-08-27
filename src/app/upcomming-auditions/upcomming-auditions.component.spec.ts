import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingAuditionsComponent } from './upcomming-auditions.component';

describe('UpcommingAuditionsComponent', () => {
  let component: UpcommingAuditionsComponent;
  let fixture: ComponentFixture<UpcommingAuditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingAuditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingAuditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
