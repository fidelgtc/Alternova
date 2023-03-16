import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToolbarComponent} from "./toolbar/toolbar.component";
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterOutlet} from "@angular/router";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent
  ],
  exports: [
    ToolbarComponent,
    MaterialModule,
    FlexLayoutModule,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterOutlet,
    ComponentsModule
  ]
})
export class SharedModule { }
