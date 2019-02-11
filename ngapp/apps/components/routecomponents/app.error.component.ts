import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-component',
    template :`
        <h2> Error occured </h2>

        
    `

})
export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
