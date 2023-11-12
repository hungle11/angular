import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpclComponent } from './sign-upcl.component';

describe('SignUpclComponent', () => {
  let component: SignUpclComponent;
  let fixture: ComponentFixture<SignUpclComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpclComponent]
    });
    fixture = TestBed.createComponent(SignUpclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
