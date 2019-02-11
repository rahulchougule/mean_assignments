// actual business logic means how to save and get saved data
// here class is imported from model to push the data in required structure/format
// and to get the data from class in declared format...model 

import { Product, Products } from "./app.product.model";
export class ProductLogic {
  private products: Array<Product>;
  constructor() {
    this.products = Products;
  
  }
  getProducts(): Array<Product> {
    return this.products;
  }
  saveProduct(p: Product): Array<Product> {
    this.products.push(p);
    return this.products;
  }
  
}
