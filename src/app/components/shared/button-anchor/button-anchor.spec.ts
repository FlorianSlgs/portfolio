import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnchor } from './button-anchor';

describe('ButtonAnchor', () => {
  let component: ButtonAnchor;
  let fixture: ComponentFixture<ButtonAnchor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAnchor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAnchor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
