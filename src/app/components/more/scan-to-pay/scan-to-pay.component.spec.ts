import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanToPayComponent } from './scan-to-pay.component';

describe('ScanToPayComponent', () => {
  let component: ScanToPayComponent;
  let fixture: ComponentFixture<ScanToPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanToPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
