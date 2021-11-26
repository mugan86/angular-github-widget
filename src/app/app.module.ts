import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubUserModule } from 'github-user-widget';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
