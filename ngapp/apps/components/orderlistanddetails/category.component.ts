import { Component, OnInit } from '@angular/core';
import {Category,Categories} from './category.model';
 
@Component({
    selector: 'category-data',
    templateUrl: './category.html'
})
export class CategoryComponent implements OnInit {
    categories=Categories;
    categoryName:string;
    constructor() {
        this.categoryName = "";
     }
     selectCategory(c:any){
         
         this.categoryName = c.categoryName
     }
 
    ngOnInit() { }
}