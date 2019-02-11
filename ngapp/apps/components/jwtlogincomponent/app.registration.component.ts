import { Component, OnInit } from '@angular/core';
import { User } from "./app.user.model";
import { Response } from "@angular/http";
import { UserService } from "./../../services/app.userregistration.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-register-component',
    templateUrl: './app.registration.html'
})
export class RegistrationComponent implements OnInit {
   
    userRegistration:FormGroup;

    user:User;
    users:Array<User>;
   
    constructor(private serve:UserService, private router:Router) {
        this.user = new User("", "");
        this.users = new Array<User>();
     }
     
    ngOnInit(): void { }

    navigateLogin():void{
        console.log("login call");
        
        this.router.navigate(['login']);
     }

    registerUser():void{
        console.log("method call");
        
        this.serve.postData(this.user).subscribe(
        (resp:Response) => {
            this.users.push(resp.json().data);
            console.log(resp.json().data);
            
        },
         error => {
            console.log(`Error occured ${error}`);
            
         }
        )
    }



}
