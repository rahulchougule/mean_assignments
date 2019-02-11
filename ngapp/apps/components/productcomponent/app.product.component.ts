import { Component, OnInit } from '@angular/core';
import { Product, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
import { stringify } from '@angular/core/src/util';

@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'
    
})
export class ProductComponent implements OnInit {
    // OnInit is Component life cycle interface
    // tis provide ngOnInit method
   
    product:Product;  // local declaration 
    private logic:ProductLogic;
    products:Array<Product>;
    categories = Categories;
    tableHeaders:Array<string> // to display in html 
    constructor() {
        this.product = new Product(0,"" ,"", 0);
        this.logic = new ProductLogic();
        this.products = new Array<Product>();
        this.tableHeaders = new Array<string>();
     }

    //  the method will be invoked immediately after cnstr
    ngOnInit(): void { 
        // read all properties of product clss and push them in table headers array
        // so that they can be fetched on html view for dynamic table generation
        for(let p in this.product){ // same like object.keys
            this.tableHeaders.push(p);
        }
        this.products = this.logic.getProducts();
    }
    clear():void{
        this.product = new Product(0,"" ,"", 0);}
    save():void{
        this.products = this.logic.saveProduct(this.product);
        //alert(JSON.stringify(this.products));
    }    
    getSelectedRow(p:Product):void{
        // 1. Create a deep copy of selected product
        // 2. assign that copy to this.product
        this.product = Object.assign({}, p); // mostly used to copy object

        // added this method so that we will get selected row in textboxes of html but  should not change 
        // the origical values
    }
    checkboxid(c:number, ):void{
       alert("fds")
        this.products.splice(c, 1)

    }

    checkAll(){
        
    }

}
