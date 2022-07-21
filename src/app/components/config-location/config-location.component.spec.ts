import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLocationComponent } from './config-location.component';

describe('ConfigLocationComponent', () => {
  let component: ConfigLocationComponent;
  let fixture: ComponentFixture<ConfigLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
