import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TemplateComponent } from './template/template.component';
import { WebappComponent } from './webapp/webapp.component';




const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    
  },
  {
    path : 'webapp',
    component: WebappComponent
  },
  // {
  //   path: 'auth',
  //   component: AuthComponent
  //   // children: [
  //   //   {
  //   //     path: 'login',
  //   //     component: LoginComponent
  //   //   }
  //   // ]
  // },
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
