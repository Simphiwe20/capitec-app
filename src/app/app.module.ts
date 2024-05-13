import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';
import { FtLogInComponent } from './components/forms/ft-log-in/ft-log-in.component';
import { ProfileComponent } from './components/forms/profile/profile.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { FtLandingComponent } from './components/landings/ft-landing/ft-landing.component';
import { LandingComponent } from './components/landings/landing/landing.component';
import { AboutComponent } from './components/more/about/about.component';
import { ScanToPayComponent } from './components/more/scan-to-pay/scan-to-pay.component';
import { MessagesComponent } from './components/notifications/messages/messages.component';
import { NormalDavingsComponent } from './components/savings/normal-davings/normal-davings.component';
import { BuyElectricityComponent } from './components/transact/buy-electricity/buy-electricity.component';
import { BuyPrepaidComponent } from './components/transact/buy-prepaid/buy-prepaid.component';
import { PayBeneficiaryComponent } from './components/transact/pay-beneficiary/pay-beneficiary.component';
import { SendCashComponent } from './components/transact/send-cash/send-cash.component';
import { InstructionsComponent } from './components/auth/sign-up/instructions/instructions.component';
import { VerifyIdentityComponent } from './components/auth/sign-up/verify-identity/verify-identity.component';
import { PrepareForSelfieComponent } from './components/auth/sign-up/prepare-for-selfie/prepare-for-selfie.component';
import { SavingAccountNumberComponent } from './components/auth/sign-in/saving-account-number/saving-account-number.component';
import { RemoteAppPinComponent } from './components/auth/sign-in/remote-app-pin/remote-app-pin.component';
import { ConfirmAppActivationComponent } from './components/auth/sign-in/confirm-app-activation/confirm-app-activation.component';
import { ActivationInstructionsComponent } from './components/auth/sign-in/activation-instructions/activation-instructions.component';
import { FeedbackComponent } from './components/auth/sign-in/feedback/feedback.component';
import { SteppersComponent } from './components/shared/steppers/steppers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './components/PopUps/info/info.component';
import { AccNumberComponent } from './components/PopUps/acc-number/acc-number.component';
import { CreateRemotePinComponent } from './components/auth/sign-in/create-remote-pin/create-remote-pin.component';
import { FooterComponent } from './components/auth/sign-in/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    FtLogInComponent,
    ProfileComponent,
    SignUpComponent,
    FtLandingComponent,
    LandingComponent,
    AboutComponent,
    ScanToPayComponent,
    MessagesComponent,
    NormalDavingsComponent,
    BuyElectricityComponent,
    BuyPrepaidComponent,
    PayBeneficiaryComponent,
    SendCashComponent,
    InstructionsComponent,
    VerifyIdentityComponent,
    PrepareForSelfieComponent,
    SavingAccountNumberComponent,
    RemoteAppPinComponent,
    ConfirmAppActivationComponent,
    ActivationInstructionsComponent,
    FeedbackComponent,
    SteppersComponent,
    InfoComponent,
    AccNumberComponent,
    CreateRemotePinComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
