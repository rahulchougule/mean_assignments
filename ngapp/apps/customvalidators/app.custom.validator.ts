import { AbstractControl } from "@angular/forms";
import { invalid } from "@angular/compiler/src/render3/view/util";
import { fileURLToPath } from "url";
//import { ProductFormComponent } from "./../components/productformcomponent/app.productform.component";
import { ProductLogic } from "./../components/productformcomponent/app.product.logic";
import { Products, Product } from "../components/productformcomponent/app.product.model";


export class NumericNonNegativeValidator {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static checkVal(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) > 0) {
      return null; // valid
    } else {
      return { invalid: true }; // imvalid
    }
  }

 
}

export class CheckCase{

  product:Product; // 
  //private logic:ProductLogic;
  products:Array<Product>
  

  static checkFirstUpperCase(l:AbstractControl):any{
    let val :string = l.value;
    let fl = val.charAt(0);    
    
    
   if(fl === fl.toUpperCase()){
    
    return null;
   }
   else
   {return { invalid: true } }
} 

  static towspaces(ctrl:AbstractControl):any{
    let val1: string = ctrl.value;
    let c:number = 0
    for(let i=0 ; i<val1.length; i++){
      if(val1[i]==" ")
      {
        c++;
      }
    }
    if(c <= 2){
      return null
    }
    else{return { spaces: true}}

  }

  static notEmpty(val:AbstractControl):any{
   let val1 : string = val.value;
   console.log(val1);
   
    if(val1===""){
      return { invalid:false }
    }
    else{return null}

  }

  static unique(ctrl:AbstractControl):any{
     
    var proId : number = ctrl.value;
        var logic = new ProductLogic();
        let products = new Array<Product>();
        products = logic.getProducts();
        
        for(var i=0; i<products.length; i++){
            //console.log(products[i].ProductId)
            if(proId==products[i].ProductId){
                return { notUnique: true };
            }
    
    
    
    
    
    
    // var logic = new ProductLogic();
    // let products = new Array<Product>();

    //   products = logic.getProducts();
    //   console.log(products);
      
    //   for(var i=0; i<products.length; i++){
    //     if(parseInt(ctrl.value) === products[i].ProductId){
    //       return { uniqueid:true}
    //     }
    //     else
    //     return null
    //   }




  }
}
}