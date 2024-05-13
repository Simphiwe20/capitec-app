import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-remote-pin',
  templateUrl: './create-remote-pin.component.html',
  styleUrls: ['./create-remote-pin.component.scss']
})
export class CreateRemotePinComponent {

  remotePinForm: FormGroup;

  constructor() {
    this.remotePinForm = new FormGroup ({
      createPin: new FormControl('', [Validators.required]),
      confirmPin: new FormControl('', [Validators.required])
    })
  }
}
