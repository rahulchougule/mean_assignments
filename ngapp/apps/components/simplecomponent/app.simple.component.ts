import { Component } from "@angular/core";

@Component({
    selector :"app-simple-component",
    template:`<h2> HI Im first Angular Program!!! </h2>
    <br>
    

    `
     
})
export class SimpleComponent{

    constructor(){}

    add(a:number, b:number):number{

      var num3 = a+ b;
       return num3
    
    }

}