import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Body } from "@angular/http/src/body";
import {ResponseContentType} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { SignupModel, Insurance, BaseResponse } from '../models/genericModels';

@Injectable()
export class InsuranceService {

    private constants: string;

    constructor(private http: Http, private options: RequestOptions) {}

    getAll(apiUrl: string): Observable<any[]> {
        return this.http.get(apiUrl + '/api/Insurance', this.options)
            .map((response: Response) => <Insurance[]>response.json())
            .catch(this.handleError);
    }

    getInsurance(apiUrl: string, id: string): Observable<any> {
        return this.http.get(apiUrl + '/api/Insurance/' + id, this.options)
            .map((response: Response) => <Insurance>response.json())
            .catch(this.handleError);
    }

    addInsurance(apiUrl: string, input: Insurance): Observable<BaseResponse> {
        this.options.headers.set('Content-Type', 'application/json');
        return this.http.post(apiUrl + '/api/Insurance', input, this.options)
            .map((response: Response) => <BaseResponse>response.json())
            .catch(e => {
                console.log(e);
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
            });
    }

    updateInsurance(apiUrl: string, id: number, input: Insurance): Observable<BaseResponse> {
        //this._options.headers.set('Authorization', 'Bearer ' + token);
        this.options.headers.set('Content-Type', 'application/json');
        return this.http.put(apiUrl + '/api/Insurance/' + id, input, this.options)
            .map((response: Response) => <BaseResponse>response.json())
            .catch(e => {
                console.log(e);
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
            });
    }

    deleteInsurance(apiUrl: string, id: string): Observable<BaseResponse> {
        //this._options.headers.set('Authorization', 'Bearer ' + token);
        return this.http.delete(apiUrl + '/api/Insurance/' + id, this.options)
            .map((response: Response) => <BaseResponse>response.json())
            .catch(e => {
                console.log(e);
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
                return Observable.throw('Unauthorized');
            });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().ExceptionMessage || 'Server Error');
    }
}