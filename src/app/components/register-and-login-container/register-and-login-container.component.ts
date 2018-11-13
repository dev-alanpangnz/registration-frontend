import {Component, OnInit, ViewChild} from '@angular/core';
import {RegistrationFormComponent} from '../registration-form/registration-form.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-register-and-login-container',
  templateUrl: './register-and-login-container.component.html',
  styleUrls: ['./register-and-login-container.component.scss']
})
export class RegisterAndLoginContainerComponent implements OnInit {

  @ViewChild(RegistrationFormComponent)
  private registerForm: RegistrationFormComponent;

  @ViewChild(LoginFormComponent)
  private loginForm: LoginFormComponent;

  constructor() { }

  ngOnInit() {
  }

  onTabChanged(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.registerForm.refresh();
    } else {
      this.loginForm.refresh();
    }
  }

}
