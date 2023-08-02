import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDiBindingComponent } from './two-di-binding.component';

describe('TwoDiBindingComponent', () => {
  let component: TwoDiBindingComponent;
  let fixture: ComponentFixture<TwoDiBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDiBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDiBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
