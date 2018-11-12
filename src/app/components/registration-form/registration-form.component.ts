import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostDataToApiService } from '../../services/post-data-to-api.service';
import { UserAccount } from '../../model/userAccount';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registration: FormGroup;
  usernameError: String;

  constructor(private formBuilder: FormBuilder,
              private postService: PostDataToApiService,
              private userData: UserAccount) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registration = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      verificationToken: ['', Validators.required]
    });
  }

  displayEmailNotification() {
    this.setUserDataForRegistration();
    this.showVerificationCodeScreen();
    this.postService.registerUser(this.userData);
    // Check if user exists
    // this.postService.checkIfUserExists(this.userData.username).subscribe(() => {
    // }, () => {
    //   this.usernameError = 'Username already exists';
    //   document.getElementById('existing-user').style.display = 'block';
    // });
  }

  verifyEmail() {
    this.setUserDataForVerifciation();
    this.postService.updateEmailVerification(this.userData).subscribe(() => {
      this.showSuccessMessage();
    });
  }

  private setUserDataForRegistration() {
    this.userData.username = this.registration.get('username').value;
    this.userData.email = this.registration.get('email').value;
    this.userData.password = this.registration.get('password').value;
  }

  private setUserDataForVerifciation() {
    this.userData.username = this.registration.get('username').value;
    this.userData.verificationToken = this.registration.get('verificationToken').value;
  }

  private showSuccessMessage() {
    document.getElementById('email-verified').style.display = 'block';
  }

  private showVerificationCodeScreen() {
    document.getElementById('username-field').style.display = 'none';
    document.getElementById('email-field').style.display = 'none';
    document.getElementById('password-field').style.display = 'none';

    document.getElementById('register-button').style.display = 'none';
    document.getElementById('verification-field').style.display = 'block';
    document.getElementById('verify-button').style.display = 'block';
  }
}
