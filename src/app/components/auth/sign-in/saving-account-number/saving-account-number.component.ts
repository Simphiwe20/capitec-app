import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { AccNumberComponent } from 'src/app/components/PopUps/acc-number/acc-number.component';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-saving-account-number',
  templateUrl: './saving-account-number.component.html',
  styleUrls: ['./saving-account-number.component.scss']
})
export class SavingAccountNumberComponent {
 inputAccountForm: FormGroup;

  constructor(private dialog:MatDialog, private router: Router, private service: SharedServiceService, private snackbar: MatSnackBar) {
    this.inputAccountForm = new FormGroup ({
      account: new FormControl('', [Validators.required])
    })
  }

  info() : void {
    this.dialog.open (AccNumberComponent)
  }

  submit(): void {
    this.service.genericGet('/get-customer').subscribe({
      next:(res:any) => {
        const user = res.find((user:any) => user.accountNumber === this.inputAccountForm.controls['account'].value)
        console.log(user)
        if(!user) {
          this.snackbar.open("user does not exist!", 'OK', {duration:3000});
          return
        }
      }
    })
  }
}
