import { Injectable } from "@angular/core";
import { Product } from "../components/productformcomponent/app.product.model";

@Injectable() // decorator
export class SampleService{ // make this class as a service class by applying Injectable

    getProducts():Array<Product>{
        let products:Array<Product>
        products = new Array<Product>();
        products.push(new Product(1001,"P1", "C1", 24521));
        products.push(new Product(1002,"P2", "C2", 24543));
        return products;
    }
}