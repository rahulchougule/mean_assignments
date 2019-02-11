import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-component',
    template:`
    <h2> Home Component </h2>
    <div class="Container">{{ message }}</div> 
    `
})
export class HomeComponent implements OnInit {
    message:string;
    
    constructor() {
        this.message = "I'm home compoenent";
     }

    ngOnInit(): void { }
}
