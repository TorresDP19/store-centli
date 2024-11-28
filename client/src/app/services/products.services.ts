import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";
import { Products } from "../models/products_model";

import { GLOBAL } from './GLOBAL';

@Injectable ({
    providedIn: 'root'
})

export class ProductsServices {
    
    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }

    addNewProduct(token, products:Products):Observable<any> {

        let json = JSON.stringify(products);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/new-product', params, { headers: headers});

    }

    getProduct(id: string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
        });

        return this.http.get(this.url + '/get-product/' + id, {headers: headers});


    }

    getProducts(page):Observable<any> {

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
        });        

        return this.http.get(this.url + '/get-all-products/' + page, {headers: headers});
    }

    updateProduct(token, id: string, products: Products):Observable<any> {
        let params = JSON.stringify(products);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.put(this.url + '/update-product/' + id, params, {headers: headers});

    }

    
    deleteProduct(token, id: string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.delete(this.url + '/delete-product/' + id, {headers: headers});

        
    }

}