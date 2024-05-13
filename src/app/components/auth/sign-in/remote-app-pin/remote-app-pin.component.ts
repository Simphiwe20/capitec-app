import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoComponent } from 'src/app/components/PopUps/info/info.component';

@Component({
  selector: 'app-remote-app-pin',
  templateUrl: './remote-app-pin.component.html',
  styleUrls: ['./remote-app-pin.component.scss']
})
export class RemoteAppPinComponent {

  pinForm: FormGroup;

  constructor(private dialog: MatDialog, private router: Router) {
    this.pinForm = new FormGroup ({
      pin: new FormControl('', [Validators.required])
    })
  }

  info() :void {
    this.dialog.open(InfoComponent)
  }

  submit(): void {
    this.router.navigate(['/create-remote-pin'])
  }
}
