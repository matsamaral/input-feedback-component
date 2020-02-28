import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorsMessages } from './const/validators-messages.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  validatorsMessages = ValidatorsMessages;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormLogin();
  }

  private createFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
