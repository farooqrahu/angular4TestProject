import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppLogin} from "./app.login";


@NgModule({
  declarations: [
    AppLogin
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppLogin]
})
export class AppLoginModule { }
