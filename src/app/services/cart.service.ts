import {Injectable} from '@angular/core';
import {environment as env} from "../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, retry, throwError} from "rxjs";
import {Product} from "../components/products/product.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartUrl = env.url_server + 'api/cart/';
  onCartChanged: BehaviorSubject<any>;
  constructor(
    private http: HttpClient
  ) {
    this.onCartChanged = new BehaviorSubject([]);
  }

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.cartUrl, httpOptions).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.cartUrl, product, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  editCart(product: Product): Observable<any> {
    return this.http.put(this.cartUrl + product.id, product);
  }

  deleteCart(id: number): Observable<any> {
    return this.http.delete(this.cartUrl + id);
  }
}
