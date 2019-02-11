import { Component, OnInit } from "@angular/core";
import { SampleService } from "./../../services/app.sample.service";

@Component({
 
    selector:"app-productservice-component",
    template:`<input type="button" (click)="getData()" value="Get Data"> `

})

export class SampleServiceComponent implements OnInit{
    constructor(private serv:SampleService){};

    ngOnInit():void{};
    getData():void{
        
    let data = this.serv.getProducts();
    console.log(JSON.stringify(data));
    
    };
    
    

}