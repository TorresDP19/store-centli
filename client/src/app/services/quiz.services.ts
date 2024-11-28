import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";

import { Quiz } from '../models/quiz_model';
import { GLOBAL } from './GLOBAL';

@Injectable({
    providedIn: 'root'
})

export class QuizServices {
    
    public url: string

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }

    addNewQuiz(token, quiz:Quiz):Observable<any> {
        let json = JSON.stringify(quiz);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/add-new-quiz', params, {headers: headers});

    }

    getQuizzes(token, contentId = null):Observable<any> {
        let headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });              

        return this.http.get(this.url + '/get-quizzes/' + contentId, {headers: headers});
    }

    updateQuiz(token, id:string, quiz:Quiz):Observable<any> {
        let params = JSON.stringify(quiz);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.put(this.url + '/update-quiz/' + id, params, {headers: headers});
    }

}