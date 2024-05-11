import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from 'src/app/components/PopUps/info/info.component';

@Component({
  selector: 'app-remote-app-pin',
  templateUrl: './remote-app-pin.component.html',
  styleUrls: ['./remote-app-pin.component.scss']
})
export class RemoteAppPinComponent {

  pinForm: FormGroup;

  constructor(private dialog: MatDialog) {
    this.pinForm = new FormGroup ({
      pin: new FormControl('', [Validators.required])
    })
  }

  info() :void {
    this.dialog.open(InfoComponent)
  }
}
