import {InMemoryDbService} from 'angular-in-memory-web-api';
import {DataProducts} from './products';
import {Product} from "../../components/products/product.model";
import {DataCart} from "./cart.service";

export class DataService implements InMemoryDbService {

  createDb() : any {
    return {
      'products' : DataProducts.products.map( m => new Product( m )),
      'cart': DataCart.cart.map( m => new Product( m ))
    }

  }
}
