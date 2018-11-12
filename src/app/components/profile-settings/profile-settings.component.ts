import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostDataToApiService} from '../../services/post-data-to-api.service';
import {UserAccount} from '../../model/userAccount';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  // Todo: Authenticate with existing fields before changing credentials

  emailSettings: FormGroup;
  passwordSettings: FormGroup;
  submitted = false;
  emailFeedbackMessage: String;
  passwordFeedbackMessage: String;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private postService: PostDataToApiService,
              private userData: UserAccount,
              private url: ActivatedRoute) {
    this.createEmailForm();
    this.createPasswordForm();
  }

  ngOnInit() {
    this.url.queryParams.subscribe(params => {
      this.userData.username = params['user'];
    });
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
    this.submitted = true;
    this.setDataForEmailChange();

    if (this.emailSettings.invalid) {
      this.emailFeedbackMessage = 'All fields are required for submission';
      document.getElementById('change-email-form-feedback').style.display = 'inline';
      return;
    }
    this.callApiEmailUpdate();
  }

  changePassword() {
    this.submitted = true;
    this.setDataForPasswordChange();

    if (this.passwordSettings.invalid) {
      this.passwordFeedbackMessage = 'All fields are required for submission';
      document.getElementById('change-password-form-feedback').style.display = 'inline';
      return;
    }
    this.callApiPasswordUpdate();
  }

  logOut() {
    this.userData = new UserAccount();
    this.router.navigateByUrl('');
  }

  private setDataForEmailChange() {
    this.userData.email = this.emailSettings.get('newEmail').value;
  }

  private setDataForPasswordChange() {
    this.userData.password = this.passwordSettings.get('newPassword').value;
  }

  private callApiEmailUpdate() {
    this.postService.updateEmail(this.userData).subscribe(() => {
      this.emailFeedbackMessage = 'Email Successfully Changed!';
      document.getElementById('change-email-form-feedback').style.display = 'block';
    }, (res) => {
      this.emailFeedbackMessage = res.error.message;
      document.getElementById('change-email-form-feedback').style.display = 'block';
    });
  }

  private callApiPasswordUpdate() {
    if (this.passwordSettings.get('newPassword').value === this.passwordSettings.get('confirmPassword').value) {
      this.postService.updatePassword(this.userData).subscribe(() => {
        this.passwordFeedbackMessage = 'Password Successfully Updated!';
        document.getElementById('change-password-form-feedback').style.display = 'block';
      }, (res) => {
        this.passwordFeedbackMessage = res.error.message;
        document.getElementById('change-password-form-feedback').style.display = 'block';
      });
    } else {
      this.passwordFeedbackMessage = 'Your password does not match';
      document.getElementById('change-password-form-feedback').style.display = 'block';
    }
  }
}
