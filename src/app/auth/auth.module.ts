import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LoginComponent } from './login/login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

import { FlipModule } from 'ngx-flip';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule } from '@angular/forms';
import {KeyFilterModule} from 'primeng/keyfilter';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FlipModule,
    RadioButtonModule,
    FormsModule,
    KeyFilterModule
  ]
})
export class AuthModule { }
