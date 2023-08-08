import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentWithDIComponent } from './first-component-with-di.component';

describe('FirstComponentWithDIComponent', () => {
  let component: FirstComponentWithDIComponent;
  let fixture: ComponentFixture<FirstComponentWithDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentWithDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentWithDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
