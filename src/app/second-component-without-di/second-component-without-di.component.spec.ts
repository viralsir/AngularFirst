import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentWithoutDIComponent } from './second-component-without-di.component';

describe('SecondComponentWithoutDIComponent', () => {
  let component: SecondComponentWithoutDIComponent;
  let fixture: ComponentFixture<SecondComponentWithoutDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComponentWithoutDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComponentWithoutDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
