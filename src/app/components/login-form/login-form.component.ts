import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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
    this.router.navigateByUrl('account');
  }

}
