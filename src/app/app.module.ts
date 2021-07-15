import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HiComponent } from './hi/hi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructualDirectiveComponent } from './structual-directive/structual-directive.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { AuthorListComponent } from './output-binding/author-list.component';
import { AuthorDetailComponent } from './output-binding/author-detail.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ToggleComponent } from './view-child/toogle.component';


@NgModule({
  declarations: [
    AppComponent,
    HiComponent,
    DataBindingComponent,
    StructualDirectiveComponent,
    ClassStyleBindingComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ViewChildComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
