import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccountNumberComponent } from './saving-account-number.component';

describe('SavingAccountNumberComponent', () => {
  let component: SavingAccountNumberComponent;
  let fixture: ComponentFixture<SavingAccountNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingAccountNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
