import { Component, OnInit } from '@angular/core';
import { Categories } from "./app.product.model";
import { Product } from "./../../models/app.product.model";
import { ProductService } from "./../../services/app.products.service";
import { Response } from "@angular/http";
import { Products } from '../productcomponent/app.product.model';
import { FilterPipe } from "./../productserviecomponent/filter.pipe";
import { tokenKey } from '@angular/core/src/view';

@Component({
    selector: 'app-product-service-component',
    templateUrl: './app.product.view.html'
    
})
export class ProductServiceComponent implements OnInit {
    // OnInit is Component life cycle interface
    // tis provide ngOnInit method
    name:any;
    product:Product;  // local declaration 
    
    products:Array<Product>;
    filteredItems:Array<Product>;
    categories = Categories;
    tableHeaders:Array<string> // to display in html 

    token:string;
    constructor(private serve:ProductService) {
        this.product = new Product("","", "", "", "",0)
        this.products = new Array<Product>();
        this.tableHeaders = new Array<string>();

        this.token = sessionStorage.getItem('token');
     }

    //  the method will be invoked immediately after cnstr
    ngOnInit(): void { 
        // read all properties of product clss and push them in table headers array
        // so that they can be fetched on html view for dynamic table generation
        for(let p in this.product){ // same like object.keys
            this.tableHeaders.push(p);
        }

        this.serve.getData(this.token).subscribe(
            (resp:Response) =>{
                this.products = resp.json().data;
                console.log(resp.json().data);
            },
            error => {
                console.log(`Error occured ${error}`);
                
            }
            
        );
    }
    clear():void{
      this.product = new Product("","" ,"","","",0 )  
    }
    save():void{
        console.log("product post called.....");
        
       this.serve.postData( this.product, this.token).subscribe(
        (resp:Response) =>{
            this.products.push(resp.json().data);
            console.log(resp.json().data);
        },
        error => {
            console.log(`Error occured ${error}`);
            
        }
       );  
     }    

     update():void{
         
        this.serve.putData( this.product.ProductId, this.product).subscribe(
            (resp:Response) =>{
               // this.products.push(resp.json().data);
                 
               console.log(resp.json().data);
               this.ngOnInit();
            },
            error => {
                console.log(`Error occured ${error}`);
                
            }
        );
     }

     delete(pid:string):void{

         //var id = this.product.ProductId;
         console.log(pid);
        // console.log(this.products);
         
         this.serve.deleteData(pid, this.token).subscribe(
            (resp:Response) =>{
                  
                console.log(resp.json().data);
               this.ngOnInit();
             },
             error => {
                 console.log(`Error occured ${error}`);
                 
             }
        );
     }

     search(val:string):void{
         console.log(val);
        
         this.serve.searchData(val).subscribe(
            (resp:Response) =>{
                  
                console.log(resp.json().data);
               this.ngOnInit();
             },
             error => {
                 console.log(`Error occured ${error}`);
                 
             }
        );        
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

    
assignCopy(){
    this.filteredItems = Object.assign([], this.products)
}
filterItem(val:any){
    if(!val){
        this.assignCopy();
     }
     this.filteredItems = Object.assign([], this.products).filter(
         item => item.name.toLowerCase().indexOf(val.toLowerCase()) > -1
     )
     
this.assignCopy();
}

}

