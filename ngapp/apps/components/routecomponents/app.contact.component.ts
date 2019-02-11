import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-component',
    template:`
    <h2> Contact Component </h2>
    <div class="Container">{{ message }}</div> 
    <br>
    <a routerLink="/product"> Product </a>
    
    `
})
export class ContactComponent implements OnInit {
    message:string;
    
    constructor() {
        this.message = "I'm contact compoenent"
     }

    ngOnInit(): void { }
}
