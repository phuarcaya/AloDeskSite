import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStripComponent } from './contact-strip.component';

describe('ContactStripComponent', () => {
  let component: ContactStripComponent;
  let fixture: ComponentFixture<ContactStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
