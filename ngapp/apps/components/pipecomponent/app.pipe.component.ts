import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "./../productcomponent/app.product.component";
import { Product } from '../productcomponent/app.product.model';
@Component({
    selector: 'app-pipe-component',
    template: `
      
        
         <input TYPE="text" [value]="name | uppercase" class="form-control">

    <div class="container">
            <strong> The angular pipes </strong>
        </div>
        <br/>
        
        <div class="container">
         <span> {{name | uppercase}} </span>
        </div>
        
        <div class="container">
         <span> {{dob | date:"short"}} </span>
        </div>

           
        <div class="container">
        <span> {{dob | date:"medium"}} </span>
       </div>

       
       <div class="container">
       <span> {{dob | date:"full" | uppercase}} </span>
      </div>

      
      <div class="container">
      <span> {{dob | date:"dd/MM/yyyy"}} </span>
     </div>


        <div class="container">
         <span> {{salary | currency:"INR"}} </span>
        </div>
        
        

        <div class="container">
         <span> {{prd | json}} </span>
        </div>
        `
    
})
export class PipedComponent implements OnInit {
    name:string;
    dob:Date;
    salary:number;
    prd:Product;

    
    constructor() {

        this.name="rahul";
        this.dob=new Date(1988,0,19)
        this.salary=111111;
        this.prd = new Product(123,"10001", "P1", 2222)
     }

    ngOnInit(): void { }
}
