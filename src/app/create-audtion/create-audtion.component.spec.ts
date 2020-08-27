import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAudtionComponent } from './create-audtion.component';

describe('CreateAudtionComponent', () => {
  let component: CreateAudtionComponent;
  let fixture: ComponentFixture<CreateAudtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAudtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAudtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
