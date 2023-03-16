import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../products/product.model";
import {DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, map, merge, Observable, Subject} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import exportFromJSON from "export-from-json";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{

  public dataSource: FilesDataSource;
  displayedColumns: string[] = ['name', 'quantity', 'unitPrice', 'totalPrice'];
  private _unsubscribeAll: Subject<any>;
  public downloadJsonHref: any;
  constructor(
    private _cart: CartService,
    private _sanitizer: DomSanitizer
  ) {
    this.dataSource = new FilesDataSource(this._cart);
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
   // this.dataSource = new FilesDataSource(this._cart);
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getTotalCost(): number {
    var listCart: Product[] = this.dataSource.filteredData || [];
    return listCart.map( m => m.unitPrice * m.quantity).reduce((acc, value) => acc + value, 0);
  }

  generateDownloadJson() {

      const data = this.dataSource.filteredData;
      const fileName = 'cart-order'
      const exportType = 'json'

      exportFromJSON({ data, fileName, exportType })
  }

}

export class FilesDataSource extends DataSource<any> {
  // private _filterChange = new BehaviorSubject('');
  private _filteredDataChange = new BehaviorSubject('');

  /**
   * Constructor
   *
   * @param {CartService} _cart
   */
  constructor(
    private _cart: CartService,
  ) {
    super();
    // this.filteredData = this._itsService.its

  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._cart.onCartChanged
    ];

    return merge(...displayDataChanges)
      .pipe(
        map(() => {
            this._cart.getCart().subscribe(
              (response:Product[]) => {
                this.filteredData = response;
              }
            )
            return this.filteredData;
          }
        ));
  }


  get filteredData(): any {
    return this._filteredDataChange.value;
  }

  set filteredData(value: any) {
    this._filteredDataChange.next(value);
  }

  disconnect(): void { }
}
