export class Product {
  id: number;
  name: string;
  unitPrice: number;
  stock: number;
  quantity: number;
  type: string;

  constructor( elem?: any){
    elem = elem || {};
    this.id = elem.id || Math.floor(1000 * Math.random());
    this.name = elem.name || '';
    this.stock = elem.stock || 0;
    this.type = elem.type || '';
    this.unitPrice = elem.unit_price || elem.unitPrice || 0;
    this.quantity = elem.quantity || 0;
  }
}
