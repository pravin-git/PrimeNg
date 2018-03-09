import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Button, ButtonDirective, ButtonModule } from 'primeng/button'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Button,
    ButtonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
