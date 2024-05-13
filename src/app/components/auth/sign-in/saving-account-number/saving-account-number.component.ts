import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AccNumberComponent } from 'src/app/components/PopUps/acc-number/acc-number.component';

@Component({
  selector: 'app-saving-account-number',
  templateUrl: './saving-account-number.component.html',
  styleUrls: ['./saving-account-number.component.scss']
})
export class SavingAccountNumberComponent {
 inputAccountForm: FormGroup;

  constructor(private dialog:MatDialog, private router: Router) {
    this.inputAccountForm = new FormGroup ({
      account: new FormControl('', [Validators.required])
    })
  }

  info() : void {
    this.dialog.open (AccNumberComponent)
  }

  submit(): void {
    console.log(this.inputAccountForm.value)
    this.router.navigate(['/remote-app-pin'])
  }
}
