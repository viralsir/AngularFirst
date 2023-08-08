import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponentWithDiComponent } from './second-component-with-di.component';

describe('SecondComponentWithDiComponent', () => {
  let component: SecondComponentWithDiComponent;
  let fixture: ComponentFixture<SecondComponentWithDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComponentWithDiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondComponentWithDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
