import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TwoDiBindingComponent } from './two-di-binding/two-di-binding.component';
import {FormsModule} from "@angular/forms";
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';

@NgModule({
  declarations: [
    ParentComponent,
    FirstComponent,
    SecondComponent,
    StringIntropolationComponent,
    StudentFormComponent,
    TwoDiBindingComponent,
    TdfLoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
