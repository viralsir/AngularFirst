import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    ParentComponent,
    FirstComponent,
    SecondComponent,
    StringIntropolationComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
