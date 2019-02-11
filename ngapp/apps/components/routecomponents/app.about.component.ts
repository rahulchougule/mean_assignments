import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-about-component',
    template:`
    <h2> About Component </h2>
    <div class="Container">{{ message }}</div> 
    <br>
    <div class="container"> The value is : {{value}} </div>
    <br>
    <input type="button" value="Navigate to Contact" (click)="navigateToContact()">
    `
})
export class AboutComponent implements OnInit {
    value:number;
    message:string;
    // the injection of router and  activated route will fetch router obj
    // from RouterModule imported in NgModule using  "routing"
    constructor(private router:Router, private act:ActivatedRoute) {
        this.message = "I'm about compoenent"
     }

     // explicitely routed to contact
     navigateToContact():void{
        this.router.navigate(['contact'])
     }

     // subscribe to parameters from activated route object
    ngOnInit(): void { 
        this.act.params.subscribe((params)=>{
            this.value = params.id;
        })
    }
}
