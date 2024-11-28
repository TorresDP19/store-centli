import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { Observable } from 'rxjs-compat/Observable';

import { GLOBAL } from './GLOBAL';
import { Users } from '../models/users_model';

@Injectable ({
    providedIn: 'root'
})

export class UsersServices {
    
    public token;
    public identity;
    public url: string;

    constructor(private http:HttpClient) {
        this.url = GLOBAL.url;
    }

    newAccount(users:Users):Observable<any> {
        
        let json = JSON.stringify(users);
        let params = json;

        const headers = new HttpHeaders ({
            'Content-Type' : 'application/json'        
        });

        return this.http.post(this.url + '/sign-up', params, {headers: headers});

    }

    loginAccount(user_to_login, gethash = null):Observable<any> {
        if(gethash != null) {
            user_to_login.gethash = gethash;
        }
        
        let json = JSON.stringify(user_to_login);
        let params = json;

        const headers = new HttpHeaders({'Content-Type' : 'application/json'});
        
        return this.http.post(this.url + '/login', params , {headers: headers});
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity')!);
    
        if(identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }
    
        return this.identity;
    
    }
    
    getToken() {
        let token = localStorage.getItem('token');
    
        if(token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
    
        return this.token;
    
    }

}