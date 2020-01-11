import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FlipModule } from "ngx-flip";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { KeyFilterModule } from "primeng/keyfilter";
import { RadioButtonModule } from "primeng/radiobutton";
import { AuthComponent } from "./auth.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    ForgetPasswordComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FlipModule,
    RadioButtonModule,
    FormsModule,
    KeyFilterModule,
    RouterModule,
    TemplateModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
