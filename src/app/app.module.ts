import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { TemplateModule } from './template/template.module';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './content/home/home.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InformationComponent } from './content/information/information.component';
import { MainComponent } from './content/main/main.component';
import { AboutComponent } from './content/about/about.component';
import { FieldsetModule } from 'primeng/fieldset';
import { IntendantComponent } from './content/intendant/intendant.component';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { GalleriaModule } from 'primeng/galleria';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ContactComponent } from './content/contact/contact.component';
import { DialogModule } from 'primeng/dialog';
import { BackkgroundComponent } from './backkground/backkground.component';
import { TopbarComponent } from './backkground/topbar/topbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostFormImageComponent } from './posts/post-form-image/post-form-image.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    InformationComponent,
    MainComponent,
    AboutComponent,
    IntendantComponent,
    ContactComponent,
    BackkgroundComponent,
    TopbarComponent,
    PostsComponent,
    PostComponent,
    PostFormComponent,
    PostFormImageComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    TemplateModule,
    PanelModule,
    CardModule,
    MenuModule,
    MegaMenuModule,
    TieredMenuModule,
    ButtonModule,
    FieldsetModule,
    VirtualScrollerModule,
    TabViewModule,
    CalendarModule,
    GalleriaModule,
    ScrollPanelModule,
    DialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
