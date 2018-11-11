import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { EmailConfirmationPageComponent } from './components/email-confirmation-page/email-confirmation-page.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAccount } from './model/userAccount';

const appRoutes: Routes = [
  {path: 'register', component: RegistrationFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    EmailConfirmationPageComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,  {useHash: false}),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserAccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
