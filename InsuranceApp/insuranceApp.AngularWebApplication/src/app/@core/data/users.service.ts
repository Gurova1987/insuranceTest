import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Body } from "@angular/http/src/body";
import {ResponseContentType} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { LoginInfo, CoverageType, BaseResponse } from '../models/genericModels';

@Injectable()
export class UserService {

    private constants: string;

    constructor(private http: Http, private options: RequestOptions) { }

    userAuthentication(apiUrl, user) {
        var data = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
        var reqHeader = new Headers({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(apiUrl + '/token', data, { headers: reqHeader })
            .map((response: Response) => <any>response.json())
            .catch(e => {
                console.log(e);
            });
    }

    register(apiUrl: string, input: LoginInfo): Observable<BaseResponse> {
        return this.http.post(apiUrl + '/api/Account/Register', input, this.options)
            .map((response: Response) => <any>response.json())
            .catch(e => {
                console.log(e);
            });
    }

    getUser(apiUrl: string): Observable<BaseResponse> {
        let token = localStorage.getItem('userToken');
        this.options.headers.set('Authorization', 'Bearer ' + token);
        return this.http.get(apiUrl + '/api/Account/UserInfo', this.options)
            .map((response: Response) => <LoginInfo>response.json())
            .catch(e => {
                console.log(e);
            });
    }

    logOut() {
        localStorage.removeItem('userToken');
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().ExceptionMessage || 'Server Error');
    }
}