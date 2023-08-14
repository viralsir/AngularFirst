import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeRestComponentComponent } from './fake-rest-component.component';

describe('FakeRestComponentComponent', () => {
  let component: FakeRestComponentComponent;
  let fixture: ComponentFixture<FakeRestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeRestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeRestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
