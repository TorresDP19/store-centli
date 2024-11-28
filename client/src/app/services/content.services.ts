import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";

import { Content } from '../models/content_model';
import { GLOBAL } from './GLOBAL';

@Injectable({
    providedIn: 'root'
})

export class ContentServices {
    
    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }


    addNewContent(token, content:Content):Observable<any> {

        let json = JSON.stringify(content);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/add-new-content', params, { headers: headers});

    }

    getContent(token, id: string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.get(this.url + '/get-content/' + id, {headers: headers});

    }

    getContents(moduleId = null):Observable<any> {
        
        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json'
        });        

        return this.http.get(this.url + '/get-contents/' + moduleId, {headers: headers});

    }

    updateContent(token, id:string, content:Content):Observable<any> {
        let params = JSON.stringify(content);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.put(this.url + '/update-content/' + id, params, {headers: headers});

    }

    deleteContent(token, id:string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.delete(this.url + '/delete-content/' + id, {headers: headers});

    }

}