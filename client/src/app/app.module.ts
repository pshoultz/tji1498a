import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './components/alert/alert.component';
import { CmsComponent } from './components/cms/cms.component';
import { CmsImagesComponent } from './components/cms-images/cms-images.component';
import { CmsVideosComponent } from './components/cms-videos/cms-videos.component';
import { HeaderComponent } from './components/header/header.component';
import { SubnavComponent } from './components/subnav/subnav.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CmsComponent,
    CmsImagesComponent,
    CmsVideosComponent,
    HeaderComponent,
    SubnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
