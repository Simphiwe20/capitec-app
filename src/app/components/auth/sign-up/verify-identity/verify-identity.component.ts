import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedapiService } from 'src/app/sharedAPI/sharedapi.service';

@Component({
  selector: 'app-verify-identity',
  templateUrl: './verify-identity.component.html',
  styleUrls: ['./verify-identity.component.scss']
})
export class VerifyIdentityComponent {
  hide = true;
  fileElement: any;
  fileElement1: any;
  registerForm: FormGroup;
  uploadedfiles: File[][] = [];
  // balance:any  = 50 
  constructor( ){
    this.registerForm =new FormGroup({
       FullName :new FormControl('' , Validators.required),
       IdNumber :new FormControl('', [Validators.required, Validators.pattern(/^\d{13}$/), Validators.max(13)]),
       Contact :new FormControl('' ,Validators.required) ,
       Email:new FormControl('' ,[Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
       Password :new FormControl('',[ Validators.required,Validators.minLength(5), Validators.maxLength(5)]),
       PasswordConfirm :new FormControl('' ,Validators.required),
       Balance:new FormControl(50)
    })
  }
  ngAfterViewInit(): void {
    this.fileElement = document.getElementById('file');
    this.fileElement1 = document.getElementById('file1');

  }
// file
  fileUpload(event:any, n: number) :void{
    const files: FileList = event.target.files;
    console.log(files)
    const fileArray: File[] = [];
    for (let i = 0; i < files.length; i++) {
      fileArray.push(files[i]);
    }
    this.uploadedfiles[n] = fileArray;
  }
// removing charactors
  onInputChange(event: any) {
    // Get the input value from the event
  let  inputText
    let inputValue: string = event.target.value;
    // Replace all characters except digits using a regular expression
    inputValue = inputValue.replace(/[^\d]/g, '');
    // Update the input field value with the modified value
    event.target.value = inputValue;
    // Update the inputText property with the modified value
    inputText = inputValue;
  }
// submiting
  submit(){
   
    console.log( this.registerForm.getRawValue())
    // if (this.registerForm.invalid) return;

    if (this.registerForm.get('Password')?.value !== this.registerForm.get('PasswordConfirm')?.value) {
      this.registerForm.get('PasswordConfirm')?.setErrors({ 'pattern': true });
     console.log('error')
    
    //  return
    }
    
    let formValue = this.registerForm.getRawValue()
    delete formValue.PasswordConfirm; // Remove password from Form Value
    // formValue = formValue.push.balance
 console.log('after' , formValue)
// this.api.genericPost('/add-customer',formValue)

  }
  
}
