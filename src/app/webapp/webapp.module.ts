import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebappComponent } from './webapp.component';
import { ProgramComponent } from './program/program.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { TemplateModule } from '../template/template.module';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './program/about/about.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ContactComponent } from './program/contact/contact.component';
import {GalleriaModule} from 'primeng/galleria';
import { HomeComponent } from './program/home/home.component';
import { PersonnalComponent } from './program/personnal/personnal.component';
import { RegisterFormComponent } from './program/register-form/register-form.component';
import { PostFormComponent } from './program/home/post-form/post-form.component';
import { ApiService } from '../shared/service/api.service';

@NgModule({
  declarations: [
    WebappComponent,
    ProgramComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PersonnalComponent,
    RegisterFormComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    MenuModule,
    DialogModule,
    TemplateModule,
    ButtonModule,
    ScrollPanelModule,
    CardModule,
    GalleriaModule
  ],
  providers : [ApiService]
})
export class WebappModule {}
