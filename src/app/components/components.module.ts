import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {MaterialModule} from "../shared/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CartComponent} from './cart/cart.component';
import {RandomImageDirective} from "../directives/random-image.directive";


@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    RandomImageDirective,
  ],
    exports: [
        ProductsComponent,
        CartComponent,
      RandomImageDirective,
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class ComponentsModule { }
