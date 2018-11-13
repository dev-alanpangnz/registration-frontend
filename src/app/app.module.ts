import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAccount } from './model/userAccount';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegisterAndLoginContainerComponent } from './components/register-and-login-container/register-and-login-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatTabsModule } from '@angular/material';

const appRoutes: Routes = [
  {path: '', component: RegisterAndLoginContainerComponent},
  {path: 'login', component: RegisterAndLoginContainerComponent},
  {path: 'account', component: ProfileSettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
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
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [UserAccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
