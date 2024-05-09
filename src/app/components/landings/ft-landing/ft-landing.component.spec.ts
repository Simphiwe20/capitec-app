import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtLandingComponent } from './ft-landing.component';

describe('FtLandingComponent', () => {
  let component: FtLandingComponent;
  let fixture: ComponentFixture<FtLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
