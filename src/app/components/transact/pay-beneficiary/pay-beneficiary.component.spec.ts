import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBeneficiaryComponent } from './pay-beneficiary.component';

describe('PayBeneficiaryComponent', () => {
  let component: PayBeneficiaryComponent;
  let fixture: ComponentFixture<PayBeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
