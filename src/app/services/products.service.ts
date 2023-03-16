import {Injectable} from '@angular/core';
import {environment as env} from "../environments/environment";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
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
export class ProductsService {

  private productsUrl = env.url_server + 'api/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, httpOptions).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    product.id = null as any;
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}
