import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';

const COMPONENTS = [ErrorComponent, UserComponent, SearchUserComponent];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: COMPONENTS
})
export class GithubUserModule { }
