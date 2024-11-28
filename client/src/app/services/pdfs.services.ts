import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";

import { PDFS } from '../models/pdfs_model';
import { GLOBAL } from './GLOBAL';

@Injectable({
    providedIn: 'root'
})

export class PdfsServices {

    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }

    addNewFile(token, pdfs:PDFS):Observable<any> {

        let json = JSON.stringify(pdfs);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/add-new-pdf', params, {headers: headers});

    }

    getFile(pdfFile: null):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
        });

        return this.http.get(this.url + '/get-pdf/' + pdfFile, {headers: headers});
    }

    getAloneFile(pdfFile: null):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
        });

        return this.http.get(this.url + '/get-view-pdf/' + pdfFile, {headers: headers});
    }

    getFiles(token, contentId = null):Observable<any> {
        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });              

        return this.http.get(this.url + '/get-pdfs/' + contentId, {headers: headers});

    }

    updateFiles(token, id: string, pdfs:PDFS):Observable<any> {
        let params = JSON.stringify(pdfs);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.put(this.url + '/update-pdf/' + id, params, {headers: headers});
    }

}
