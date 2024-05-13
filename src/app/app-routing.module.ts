import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landings/landing/landing.component';
import { InstructionsComponent } from './components/auth/sign-up/instructions/instructions.component';
import { ActivationInstructionsComponent } from './components/auth/sign-in/activation-instructions/activation-instructions.component';
import { FtLandingComponent } from './components/landings/ft-landing/ft-landing.component';
import { VerifyIdentityComponent } from './components/auth/sign-up/verify-identity/verify-identity.component';
import { PrepareForSelfieComponent } from './components/auth/sign-up/prepare-for-selfie/prepare-for-selfie.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing' ,pathMatch: 'full'},
  {path: 'landing', component: FtLandingComponent},
  {path: 'instruction', component:InstructionsComponent},
  {path: 'activatin-instruction', component:ActivationInstructionsComponent},
  {path: 'identity', component: VerifyIdentityComponent},
  {path:'selfie', component:PrepareForSelfieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
