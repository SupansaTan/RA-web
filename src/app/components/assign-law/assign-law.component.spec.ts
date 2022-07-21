import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLawComponent } from './assign-law.component';

describe('AssignLawComponent', () => {
  let component: AssignLawComponent;
  let fixture: ComponentFixture<AssignLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
