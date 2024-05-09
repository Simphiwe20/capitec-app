import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCashComponent } from './send-cash.component';

describe('SendCashComponent', () => {
  let component: SendCashComponent;
  let fixture: ComponentFixture<SendCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
