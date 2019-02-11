import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-main-component',
    template:`
        <table class="table table-striped table-bordered">
        <tr>
            <td><a [routerLink]='["registration"]'> Registration </a> </td>
            <td><a [routerLink]='["login"]'> Login </a> </td>
        
        </tr>
        </table>

        <hr>
        <router-outlet></router-outlet>
    `
})
export class UserMainComponent implements OnInit {
    id:number;
    constructor() {
       // this.id = 1000;
     }

    ngOnInit(): void { }
}
