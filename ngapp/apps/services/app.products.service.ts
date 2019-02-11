import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./../models/app.product.model";

@Injectable()
export class ProductService {
    url:String;
    constructor(private http:Http){
        this.url = "http://localhost:4040";
    }

    getData(token:string):Observable<Response>{
        let resp:Observable<Response>;

        let header:Headers= new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
        });

        let option: RequestOptions = new RequestOptions();
        option.headers = header;


        resp = this.http.get(`${this.url}/api/products`, option); 
        return resp;
    }

    postData(prd:Product, token:string):Observable<Response>{
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
    });
       // header.append("AUTHORIZATION", "Basic UserName:Password");
        
       // 2. define request option for header
        // collecton of the header values
       let options: RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/products`,JSON.stringify(prd), options);
       return resp;
    }

    putData(id:string, prd:Product):Observable<Response>{
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers = new Headers({"Content-Type":"application/json"});
       // header.append("AUTHORIZATION", "Basic UserName:Password");
        
       // 2. define request option for header
        // collecton of the header values
       let options: RequestOptions = new RequestOptions();
        options.headers = header;        
        resp = this.http.put(`${this.url}/api/products/${id}`,JSON.stringify(prd), options);
        return resp;


    }
    deleteData(id:string, token:string):Observable<Response>{
        let resp:Observable<Response>;
       
        let header:Headers = new Headers({
            'Content-Type':'application/json',
            'authorization':'Bearer '+token
    });

    let options: RequestOptions = new RequestOptions();
    options.headers = header;


        resp = this.http.delete(`${this.url}/api/products/${id}`);
        return resp;
    }

    searchData(val:string):Observable<Response>{
        let resp:Observable<Response>
        resp = this.http.get(`${this.url}/api/products/${val}`);
        return resp;
    }
}