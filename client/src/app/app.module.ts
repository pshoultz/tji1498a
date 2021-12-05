import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmsComponent } from './cms/cms.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component';
import { AttractComponent } from './attract/attract.component';
import { CmsAddImageComponent } from './cms-add-image/cms-add-image.component';
import { CmsEditImageComponent } from './cms-edit-image/cms-edit-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    LoginComponent,
    NavbarComponent,
    AlertComponent,
    AttractComponent,
    CmsAddImageComponent,
    CmsEditImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
