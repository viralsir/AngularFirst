import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';

@NgModule({
  declarations: [
    ParentComponent,
    FirstComponent,
    SecondComponent,
    StringIntropolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
