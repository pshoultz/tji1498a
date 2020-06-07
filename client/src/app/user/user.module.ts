import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
    HomeComponent,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [],
  exports:
    COMPONENTS,
})
export class UserModule { }
