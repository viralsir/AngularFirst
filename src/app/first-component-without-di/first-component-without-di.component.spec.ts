import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentWithoutDIComponent } from './first-component-without-di.component';

describe('FirstComponentWithoutDIComponent', () => {
  let component: FirstComponentWithoutDIComponent;
  let fixture: ComponentFixture<FirstComponentWithoutDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentWithoutDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentWithoutDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
