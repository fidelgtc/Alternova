import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../components/products/product.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{


  public search = new FormControl('');
  constructor(
    private productsService: ProductsService
  ) {
  }
  products: Product[] = [];
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.getProducts()
  }

  filter(){
    this.filteredProducts = this.products.filter( f => (f.name+f.type).toLowerCase().includes( this.search.value?.toLowerCase() || '' ));
  }

  public getProducts() {
    this.productsService.getProducts()
      .subscribe(
        products => {
          this.products = this.filteredProducts = products;
        } );
  }

}
