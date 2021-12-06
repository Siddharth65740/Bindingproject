import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TemplateRefComponent,
    TwoWayBindingComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
