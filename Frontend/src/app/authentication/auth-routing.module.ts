import { Page500Component } from './page500/page500.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsPage } from './terms/terms.page';
import { RecoveryPage } from './recovery/recovery.page';
import { signInPage } from './signIn/signIn.page';
import { SignUpPage } from './signUp/signUp.page';
import { SplashPage } from './splash/splash.page';


const routes: Routes = [
  {
    path: '',
    component: SplashPage
  },
  {
    path: 'signIn',
    component: signInPage
  },
  {
    path: 'signUp',
    component: SignUpPage
  },
  {
    path: 'recovery',
    component: RecoveryPage
  },
  {
    path: 'terms',
    component: TermsPage
  },
  {
    path: '**',
    component: Page500Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
