import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {PostDataToApiService} from '../../services/post-data-to-api.service';
import {UserAccount} from '../../model/userAccount';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  @ViewChild(LoginFormComponent)
  private loginComponent: LoginFormComponent;

  emailSettings: FormGroup;
  passwordSettings: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private postService: PostDataToApiService,
              private userData: UserAccount) {
    this.createEmailForm();
    this.createPasswordForm();
  }

  ngOnInit() {
  }

  createEmailForm() {
    this.emailSettings = this.formBuilder.group({
      currentEmail: ['', Validators.required],
      newEmail: ['', Validators.required]
    });
  }

  createPasswordForm() {
    this.passwordSettings = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  changeEmail() {
    this.setDataForEmailChange();
    console.log(this.userData);
    // this.postService.updateEmail(this.userData).subscribe(() => {
    //   console.log('Email Successfully Updated');
    // }, () => {
    //   console.log('Incorrect Email, please try again');
    // });
  }

  changePassword() {
    this.setDataForPasswordChange();
    console.log(this.userData);
    // this.postService.updatePassword(this.userData).subscribe(() => {
    //   console.log('Password successfully updated');
    // }, () => {
    //   console.log('Incorrect Password, please try again');
    // });
  }

  logOut() {
    // Clean UserAccount object before navigating back to home.
    this.userData = new UserAccount();
    this.router.navigateByUrl('');
  }

  private setDataForEmailChange() {
    this.userData.username = this.loginComponent.login.get('username').value;
    this.userData.email = this.emailSettings.get('newEmail').value;
  }

  private setDataForPasswordChange() {
    this.userData.username = this.loginComponent.login.get('username').value;
    this.userData.password = this.passwordSettings.get('newPassword').value;
  }
}
