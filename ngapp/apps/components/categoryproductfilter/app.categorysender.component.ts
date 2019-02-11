import { Component, OnInit } from "@angular/core";
import { Category, Categories } from "./app.category.model";  // category structure and category values
import { CommunicationService } from "./app.communication.service";
@Component({
    selector: "app-catsender-component",
    template: `
       <div class="container">
         <h2><strong>Category List</strong> </h2>
 
       <table class="table table-bordered table-striped">
          <thead>
              <tr>
                <td>Category Id</td>
                <td>Category Name</td>
              </tr>
          </thead>
          <tbody>
            <tr *ngFor="let c of cats" (click)="getSelectedCategory(c)">
               <td>{{c.CatId}}</td>
               <td>{{c.CatName}}</td>
            </tr>
          </tbody>
       </table>
       </div>
    `
})
 
export class CategorySenderComponent implements OnInit {
    cat: Category;  // cat of type category model so that it can allow values in required format of defined model
    cats = Categories; // values copies from categories array pushed in category model
 
    constructor(private serv: CommunicationService) { // "CommunicationService" is a class defined in service file
        this.cat = new Category(0, ""); // needs to initialise to avaid undefined error while reading property
    }
 
 
    ngOnInit(): void { }  // will be executed immediately after constructor
 
     
    getSelectedCategory(c: Category): void { // method which returns void and accepts para of type category
        this.cat = c; // para values assigned to local variable
        this.serv.raiseEvent(this.cat.CatId); // method called from service ... cat includes all values from model here from that Id is accessed
    }
}