import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WebappComponent } from "./webapp.component";
import { ProgramComponent } from "./program/program.component";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { DialogModule } from "primeng/dialog";
import { TemplateModule } from "../template/template.module";
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [WebappComponent, ProgramComponent],
  imports: [
    CommonModule,
    MegaMenuModule,
    MenuModule,
    DialogModule,
    TemplateModule,
    ButtonModule
  ]
})
export class WebappModule {}
