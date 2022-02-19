import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AttractComponent } from './components/attract/attract.component';
import { CmsImageEditComponent } from './components/cms-image-edit/cms-image-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CmsComponent,
    CmsImagesComponent,
    CmsVideosComponent,
    HeaderComponent,
    SubnavComponent,
    AttractComponent,
    CmsImageEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
