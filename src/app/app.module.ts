import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructualDirectiveComponent } from './structual-directive/structual-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    DataBindingComponent,
    StructualDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
