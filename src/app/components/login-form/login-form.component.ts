import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostDataToApiService } from '../../services/post-data-to-api.service';
import { UserAccount } from '../../model/userAccount';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private postService: PostDataToApiService,
              private userData: UserAccount) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  userAccountLogin() {
    this.setUserDataForLogin();
    this.postService.logInToAccount(this.userData)
      .subscribe(() => {
      this.router.navigateByUrl('account');
    }, () => {
      document.getElementById('incorrect-credentials').style.display = 'block';
    });
  }

  private setUserDataForLogin() {
    this.userData.username = this.login.get('username').value;
    this.userData.password = this.login.get('password').value;
  }

}
