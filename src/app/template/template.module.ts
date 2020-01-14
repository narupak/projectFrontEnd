import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    RouterModule,
    TabMenuModule,
    MenuModule,
    ReactiveFormsModule,
    InputTextModule,
    TooltipModule
  ],
  exports: [TopbarComponent]
})
export class TemplateModule {}
