import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalDavingsComponent } from './normal-davings.component';

describe('NormalDavingsComponent', () => {
  let component: NormalDavingsComponent;
  let fixture: ComponentFixture<NormalDavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalDavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalDavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
