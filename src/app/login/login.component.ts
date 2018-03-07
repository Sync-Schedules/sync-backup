import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  options: FormGroup;

constructor(fb: FormBuilder) {
  this.options = fb.group({
    hideRequired: false,
    floatLabel: 'auto',
  });
}
}
