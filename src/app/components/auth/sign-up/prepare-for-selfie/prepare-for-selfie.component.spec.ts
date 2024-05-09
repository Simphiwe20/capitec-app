import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareForSelfieComponent } from './prepare-for-selfie.component';

describe('PrepareForSelfieComponent', () => {
  let component: PrepareForSelfieComponent;
  let fixture: ComponentFixture<PrepareForSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareForSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepareForSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
