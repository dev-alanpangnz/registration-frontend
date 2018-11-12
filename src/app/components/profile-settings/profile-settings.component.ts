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
    this.setDataForEmailChange();
    console.log(this.userData);
    this.postService.updateEmail(this.userData).subscribe(() => {
      // Show feedback
      console.log('Email Successfully Updated');
    }, () => {
      // Show feedback
      console.log('Incorrect Email, please try again');
    });
  }

  changePassword() {
    this.setDataForPasswordChange();
    console.log(this.userData);
    this.postService.updatePassword(this.userData).subscribe(() => {
      // Show feedback
      console.log('Password successfully updated');
    }, () => {
      // Show feedback
      console.log('Incorrect Password, please try again');
    });
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
}
