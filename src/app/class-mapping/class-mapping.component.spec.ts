import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMappingComponent } from './class-mapping.component';

describe('ClassMappingComponent', () => {
  let component: ClassMappingComponent;
  let fixture: ComponentFixture<ClassMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
