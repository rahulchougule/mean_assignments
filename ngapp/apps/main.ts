// Angular module file
// 1. import all standarad / required modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Categories } from "./components/productcomponent/app.product.model";
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// 2. import all required component 
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductFormComponent } from "./components/productformcomponent/app.productform.component";
import { SampleService } from "./services/app.sample.service";
import { SampleServiceComponent } from "./components/sampleservice/app.sampleservice.component";
import { ProductServiceComponent } from "./components/productserviecomponent/app.productservice.component";
import { HttpModule } from "@angular/http";
import { ProductService } from "./services/app.products.service";
import { CategorySenderComponent } from "./components/categoryproductfilter/app.categorysender.component";
import { ProductReceiverComponent } from "./components/categoryproductfilter/app.productreceiver.component";
import { CommunicationService } from "./components/categoryproductfilter/app.communication.service";
import { CategoryComponent } from "./components/orderlistanddetails/category.component";
import { ProductOrderComponent } from "./components/orderlistanddetails/product.component";
// routing
import { AboutComponent } from "./components/routecomponents/app.about.component";
import { HomeComponent } from "./components/routecomponents/app.home.component";
import { ContactComponent } from "./components/routecomponents/app.contact.component";
import { MainComponent } from "./components/routecomponents/app.main.component";
//import { routing } from "./components/routecomponents/app.route.table";

import { routing } from "./components/jwtlogincomponent/app.route.table";

// filter
import { FilterPipe } from "./components/productserviecomponent/filter.pipe";

// router guarding
import { AppGuardService } from "./services/app.test.guard.service";
import { ErrorComponent } from "./components/routecomponents/app.error.component";


//user registration 
import { RegistrationComponent } from "./components/jwtlogincomponent/app.registration.component";
import { UserService } from "./services/app.userregistration.service";
import { LoginComponent } from "./components/jwtlogincomponent/app.login.component";
import { UserMainComponent } from "./components/jwtlogincomponent/app.user.main.component";

// pipe
import { PipedComponent } from "./components/pipecomponent/app.pipe.component";

// 3. import all directives
@NgModule({
    imports:[BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
   
    declarations:[ProductFormComponent,
    ProductComponent, SampleServiceComponent ,     
    CategorySenderComponent, ProductReceiverComponent, 
    ProductServiceComponent, ProductFormComponent, 
    CategoryComponent, ProductOrderComponent, 
    AboutComponent, HomeComponent, ContactComponent, MainComponent,
    FilterPipe, ErrorComponent,
    RegistrationComponent, LoginComponent , UserMainComponent, PipedComponent], // declare all components ... lazy loading
   
    providers:[SampleServiceComponent, ProductService, SampleService, CommunicationService, 
        AppGuardService, UserService ], // service provider class
   
    bootstrap:[PipedComponent]
})
export class AppModule{}

// 4. making app module as bootstrap module
platformBrowserDynamic().bootstrapModule(AppModule);