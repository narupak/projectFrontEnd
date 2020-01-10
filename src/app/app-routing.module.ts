import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TemplateComponent } from './template/template.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './auth/login/login/login.component';
import { AboutComponent } from './content/about/about.component';
import { InformationComponent } from './content/information/information.component';
import { ContactComponent } from './content/contact/contact.component';




const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path : 'program',
    component : TemplateComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
