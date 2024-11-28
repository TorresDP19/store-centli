import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";

import { Videos } from '../models/videos_model';
import { GLOBAL } from './GLOBAL';

@Injectable ({
    providedIn: 'root'
})

export class VideosServices {

    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }

    addNewVideo(token, videos:Videos):Observable<any> {
        let json = JSON.stringify(videos);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/add-new-video', params, {headers: headers});

    }

    getVideo(token, id:string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.get(this.url + '/get-video/' + id, {headers: headers});
    }

    getVideos(token, contentId = null):Observable<any> {
        let headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });              

        return this.http.get(this.url + '/get-videos/' + contentId, {headers: headers});

    }

    updateVideos(token, id:string, videos:Videos):Observable<any> {
        let params = JSON.stringify(videos);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.put(this.url + '/update-video/' + id, params, {headers: headers});
    }

    getFiles(videoFile: null):Observable<any> {

        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
        });

        return this.http.get(this.url + '/get-view-video/' + videoFile, {headers: headers});
    }

    getVideoAlone(token, id: string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.get(this.url + '/get-video/' + id, {headers: headers});

    }

}