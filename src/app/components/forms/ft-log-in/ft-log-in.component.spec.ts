import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtLogInComponent } from './ft-log-in.component';

describe('FtLogInComponent', () => {
  let component: FtLogInComponent;
  let fixture: ComponentFixture<FtLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
