import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAppActivationComponent } from './confirm-app-activation.component';

describe('ConfirmAppActivationComponent', () => {
  let component: ConfirmAppActivationComponent;
  let fixture: ComponentFixture<ConfirmAppActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAppActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmAppActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
