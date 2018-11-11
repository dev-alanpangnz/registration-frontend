import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EmailConfirmationPageComponent } from './components/email-confirmation-page/email-confirmation-page.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAccount } from './model/userAccount';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegisterAndLoginContainerComponent } from './components/register-and-login-container/register-and-login-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

const appRoutes: Routes = [
  {path: 'combine', component: RegisterAndLoginContainerComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'login', component: LoginFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    EmailConfirmationPageComponent,
    ProfileSettingsComponent,
    LoginFormComponent,
    RegisterAndLoginContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,  {useHash: false}),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [UserAccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
