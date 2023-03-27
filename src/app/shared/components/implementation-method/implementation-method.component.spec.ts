import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationMethodComponent } from './implementation-method.component';

describe('ImplementationMethodComponent', () => {
  let component: ImplementationMethodComponent;
  let fixture: ComponentFixture<ImplementationMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementationMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
