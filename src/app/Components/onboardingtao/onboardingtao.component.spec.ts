import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingtaoComponent } from './onboardingtao.component';

describe('OnboardingtaoComponent', () => {
  let component: OnboardingtaoComponent;
  let fixture: ComponentFixture<OnboardingtaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingtaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingtaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
