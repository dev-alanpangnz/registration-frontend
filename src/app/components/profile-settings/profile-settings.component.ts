import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  emailSettings: FormGroup;
  passwordSettings: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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

  logOut() {
    this.router.navigateByUrl('combine');
  }

}
