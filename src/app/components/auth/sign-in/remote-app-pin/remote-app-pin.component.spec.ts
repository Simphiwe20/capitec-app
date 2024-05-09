import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteAppPinComponent } from './remote-app-pin.component';

describe('RemoteAppPinComponent', () => {
  let component: RemoteAppPinComponent;
  let fixture: ComponentFixture<RemoteAppPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteAppPinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteAppPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
