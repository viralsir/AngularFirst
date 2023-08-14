import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TwoDiBindingComponent } from './two-di-binding/two-di-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';
import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { FirstComponentWithoutDIComponent } from './first-component-without-di/first-component-without-di.component';
import { SecondComponentWithoutDIComponent } from './second-component-without-di/second-component-without-di.component';
import { FirstComponentWithDIComponent } from './first-component-with-di/first-component-with-di.component';
import { SecondComponentWithDiComponent } from './second-component-with-di/second-component-with-di.component';
import {HttpClientModule} from "@angular/common/http";
import { FakeRestComponentComponent } from './fake-rest-component/fake-rest-component.component';

@NgModule({
  declarations: [
    ParentComponent,
    FirstComponent,
    SecondComponent,
    StringIntropolationComponent,
    StudentFormComponent,
    TwoDiBindingComponent,
    TdfLoginPageComponent,
    MdfLoginPageComponent,
    StructureDirectiveComponent,
    FirstComponentWithoutDIComponent,
    SecondComponentWithoutDIComponent,
    FirstComponentWithDIComponent,
    SecondComponentWithDiComponent,
    FakeRestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
