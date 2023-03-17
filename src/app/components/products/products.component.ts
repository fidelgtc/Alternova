import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {CartService} from "../../services/cart.service";
import {ProductsService} from "../../services/products.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  @Input() products: Product[] = [];

  constructor(
    private _cart: CartService,
    private _products: ProductsService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  addToCart( product: Product) : void {
    // VALIDATE IF IS AVAILABLE ON STROCK
    if( product.stock <= 0 ) {
      this._snackBar.open('Sorry, no more of this item in Stock', 'close');
    }else {
      // VALIDATION IF ALREADY EXIST IN CARTS
      this._cart.getCart().subscribe(
        ( listProducts: Product[] ) => {

          // IF EXIST
          if( listProducts.some( s => s.id === product.id ) ){
            product.stock --;
            this._products.editProduct( product )
            const cartProduct: Product = new Product( listProducts.find( f => f.id === product.id ) );
            cartProduct.quantity ++;
            cartProduct.stock --;
            this._cart.editCart( cartProduct ).subscribe( response => {
              this._cart.onCartChanged.next( this._cart.getCart() )
            });
          } else {
            // IF NOT EXIST

            product.quantity ++;
            product.stock --;
            this._cart.createCart( product ).subscribe(
              (response: Product) => {
                // SUCCESS ADDING THE PRODUCT TO CART

                this._products.editProduct( product )
                this._cart.onCartChanged.next( this._cart.getCart() )
              }
            );
          }
        }
      )

    }
  }
}
