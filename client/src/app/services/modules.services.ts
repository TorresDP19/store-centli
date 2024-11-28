import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";

import { Modules } from '../models/module_model';
import { GLOBAL } from './GLOBAL';

@Injectable({
    providedIn: 'root'
})

export class ModuleServices {
    
    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }

    addNewModule(token, modules:Modules):Observable<any> {
        let json = JSON.stringify(modules);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/add-new-module', params, { headers: headers});

    }

    getModule(token, id: string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.get(this.url + '/get-module/' + id, {headers: headers});

    }

    getModules(courseId = null):Observable<any> {
        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json'
        });                

        return this.http.get(this.url + '/get-modules/' + courseId, {headers: headers});

    }

    updateModule(token, id: string, modules:Modules):Observable<any> {
        let params = JSON.stringify(modules);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.put(this.url + '/update-module/' + id, params, {headers: headers});

    }

    deleteModule(token, id:string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.delete(this.url + '/delete-module/' + id, {headers: headers});

    }


}