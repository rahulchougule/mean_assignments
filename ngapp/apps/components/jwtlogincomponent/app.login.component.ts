import { Component, OnInit } from '@angular/core';
import { User } from "./app.user.model";
import { UserService } from "./../../services/app.userregistration.service";
import { Router } from "@angular/router";
import { Response } from "@angular/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Component({
    selector: 'app-login-component',
    templateUrl: './app.login.html'
    
})
export class LoginComponent implements OnInit {
    
    user:User;
    users:Array<User>;

    
    //frmLogin:FormGroup;

    constructor(private serve:UserService, private router:Router) {
        this.user = new User("", "");
        this.users = new Array<User>();



        // this.frmLogin = new FormGroup({           
        //     txtName: new FormControl (
        //         this.user.UserName,
        //         Validators.compose([
        //             Validators.required
        //         ])
        //     )


        // });
     }

    ngOnInit(): void { }

    navigateRegistration(){
        
        this.router.navigate(['registration']);
    }
     
    checkLogin():void{
        console.log("login called");
        console.log(this.user);
        
        this.serve.loginData(this.user).subscribe(
            
            
            (resp:Response) => {
                this.users.push(resp.json().token);
                
                
                 sessionStorage.setItem('token', resp.json().token);
                console.log(sessionStorage.getItem('token'));
                
                 if (sessionStorage.getItem('token')==="undefined"){
                     this.router.navigate(['login']);
  
                    }
                    else{
                        this.router.navigate(['product']);
                    }
                
                
            },
             error => {
                //this.router.navigate(['login']);
                console.log(`Error occured ${error}`);
                
             }
        )


    }
}
