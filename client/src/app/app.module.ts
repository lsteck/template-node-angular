import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIShellModule } from 'carbon-components-angular';

import { AppComponent } from './app.component';
import { UiShellComponent } from './ui-shell/ui-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    UiShellComponent
  ],
  imports: [
    BrowserModule,
    UIShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
