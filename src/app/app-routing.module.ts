import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landings/landing/landing.component';
import { InstructionsComponent } from './components/auth/sign-up/instructions/instructions.component';
import { ActivationInstructionsComponent } from './components/auth/sign-in/activation-instructions/activation-instructions.component';
import { FtLandingComponent } from './components/landings/ft-landing/ft-landing.component';
import { VerifyIdentityComponent } from './components/auth/sign-up/verify-identity/verify-identity.component';
import { PrepareForSelfieComponent } from './components/auth/sign-up/prepare-for-selfie/prepare-for-selfie.component';
import { SavingAccountNumberComponent } from './components/auth/sign-in/saving-account-number/saving-account-number.component';
import { RemoteAppPinComponent } from './components/auth/sign-in/remote-app-pin/remote-app-pin.component';
import { CreateRemotePinComponent } from './components/auth/sign-in/create-remote-pin/create-remote-pin.component';
import { FeedbackComponent } from './components/auth/sign-in/feedback/feedback.component';
import { ConfirmAppActivationComponent } from './components/auth/sign-in/confirm-app-activation/confirm-app-activation.component';
import { SteppersComponent } from './components/shared/steppers/steppers.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: FtLandingComponent },
  { path: 'instruction', component: InstructionsComponent },
  { path: 'activatin-instruction', component: ActivationInstructionsComponent },
  { path: 'identity', component: VerifyIdentityComponent },
  { path: 'selfie', component: PrepareForSelfieComponent },
  { path: 'app-saving-account-number', component: SavingAccountNumberComponent },
  { path: 'remote-app-pin', component: RemoteAppPinComponent },
  { path: 'create-remote-pin', component: CreateRemotePinComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'confirm-app-activation', component: ConfirmAppActivationComponent },
  { path: 'activation-instructions', component: ActivationInstructionsComponent },
  { path: 'stepper', component: SteppersComponent },
  { path: 'landing', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
