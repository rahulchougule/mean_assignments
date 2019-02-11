import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppGuardService } from "../../services/app.test.guard.service";
import { LoginComponent } from "./app.login.component";
import { RegistrationComponent } from "./app.registration.component";
import { ProductServiceComponent } from "./../productserviecomponent/app.productservice.component";

// define route table
const routes : Routes = [{path:'registration',component:RegistrationComponent},
{path:'login', component:LoginComponent},
{path:'product', component:ProductServiceComponent}
];

// register the route table for root of the current angular app
// when routing is procided to imports of ngmodule, this will load routermodule with route table
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

