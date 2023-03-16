import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MaterialModule} from "../../shared/material.module";
import {ComponentsModule} from "../../components/components.module";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
