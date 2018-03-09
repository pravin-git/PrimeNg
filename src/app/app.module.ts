import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Button, ButtonDirective, ButtonModule } from 'primeng/button'

import { DynamicModule } from 'ng-dynamic-component';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AnotherChildComponent } from './another-child/another-child.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AnotherChildComponent,
    Button,
    ButtonDirective,
    ListComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule.withComponents([ChildComponent, AnotherChildComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
