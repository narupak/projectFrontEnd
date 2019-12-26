import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [TemplateComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule
  ]
})
export class TemplateModule { }
