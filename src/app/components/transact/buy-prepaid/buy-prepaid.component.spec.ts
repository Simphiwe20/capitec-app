import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPrepaidComponent } from './buy-prepaid.component';

describe('BuyPrepaidComponent', () => {
  let component: BuyPrepaidComponent;
  let fixture: ComponentFixture<BuyPrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPrepaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
