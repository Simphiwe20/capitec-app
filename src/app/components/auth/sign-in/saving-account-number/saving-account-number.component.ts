import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AccNumberComponent } from 'src/app/components/PopUps/acc-number/acc-number.component';

@Component({
  selector: 'app-saving-account-number',
  templateUrl: './saving-account-number.component.html',
  styleUrls: ['./saving-account-number.component.scss']
})
export class SavingAccountNumberComponent {

  inputAccountForm: FormGroup;

  constructor(private dialog:MatDialog) {
    this.inputAccountForm = new FormGroup ({
      account: new FormControl('', [Validators.required])
    })
  }

  info() : void {
    this.dialog.open (AccNumberComponent)
  }
}
