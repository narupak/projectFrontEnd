import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  {
    path : 'login',
    component : AuthComponent
  },
  {
    path : 'program',
    component : TemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
