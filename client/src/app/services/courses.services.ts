import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http ,Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs-compat/Observable";

import { Courses } from '../models/courses_model';
import { GLOBAL } from './GLOBAL';

@Injectable({
    providedIn: 'root'
})

export class CoursesServices {
    
    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }


    addNewCourse(token, courses:Courses):Observable<any> {
        
        let json = JSON.stringify(courses);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.post(this.url + '/add-new-course', params, {headers: headers});

    }

    getCourse(token, id:string):Observable<any> {
        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.get(this.url + '/get-course/' + id, {headers: headers});
    }    

    getCourses(page):Observable<any> {
        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json'
        });

        return this.http.get(this.url + '/get-courses/' + page, {headers: headers});
    }

    updateCourse(token, id:string, course:Courses):Observable<any> {
        let params = JSON.stringify(course);
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });
        
        return this.http.put(this.url + '/update-course/' + id, params, {headers: headers});

    }
    
    deleteCourse(token, id:string):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Authorization': token
        });

        return this.http.delete(this.url + '/delete-course/' + id, {headers: headers});

        
    }

}