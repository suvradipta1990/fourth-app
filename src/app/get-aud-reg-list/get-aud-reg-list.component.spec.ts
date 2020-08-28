import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAudRegListComponent } from './get-aud-reg-list.component';

describe('GetAudRegListComponent', () => {
  let component: GetAudRegListComponent;
  let fixture: ComponentFixture<GetAudRegListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAudRegListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAudRegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
