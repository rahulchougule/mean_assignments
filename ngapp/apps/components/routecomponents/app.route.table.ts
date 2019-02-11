import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { HomeComponent } from "./app.home.component";
import { ProductServiceComponent } from "./../productserviecomponent/app.productservice.component";
import { AppGuardService } from "../../services/app.test.guard.service";
import { ErrorComponent } from "./app.error.component";

// define route table
const routes : Routes = [{path:'home',component:HomeComponent},
{path:'about', component:AboutComponent},
//{path:'contact', component:ContactComponent, children:[{path:'product', component:ProductServiceComponent}]},
{path:'contact', component:ContactComponent, canActivate:[AppGuardService]},
{path:'product', component:ProductServiceComponent},
{path:" ", redirectTo:"home", pathMatch:"full"}, 
{path:"error", component:ErrorComponent}
];

// register the route table for root of the current angular app
// when routing is procided to imports of ngmodule, this will load routermodule with route table
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

