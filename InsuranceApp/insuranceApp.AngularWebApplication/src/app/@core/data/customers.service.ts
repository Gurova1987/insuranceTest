import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Body } from "@angular/http/src/body";
import {ResponseContentType} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { SignupModel, CustomerModel, BaseResponse } from '../models/genericModels';


@Injectable()
export class CustomerService {

    private constants: string;

    constructor(private http: Http, private options: RequestOptions) {}

    getCustomers(apiUrl: string): Observable<any[]> {
        return this.http.get(apiUrl + '/api/Customer', this.options)
            .map((response: Response) => <CustomerModel[]>response.json())
            .catch(this.handleError);
    }

    getCustomer(apiUrl: string, id: string): Observable<any[]> {
        return this.http.get(apiUrl + '/api/Customer/' + id, this.options)
            .map((response: Response) => <CustomerModel>response.json())
            .catch(this.handleError);
    }

    addCustomer(apiUrl: string, input: CustomerModel): Observable<BaseResponse> {
        this.options.headers.set('Content-Type', 'application/json');
        return this.http.post(apiUrl + '/api/Customer', input, this.options)
            .map((response: Response) => <BaseResponse>response.json())
            .catch(e => {
                console.log(e);
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
            });
    }

    updateCustomer(apiUrl: string, id: number, input: CustomerModel): Observable<BaseResponse> {
        //this._options.headers.set('Authorization', 'Bearer ' + token);
        this.options.headers.set('Content-Type', 'application/json');
        return this.http.put(apiUrl + '/api/Customer/' + id, input, this.options)
            .map((response: Response) => <BaseResponse>response.json())
            .catch(e => {
                console.log(e);
                if (e.status === 401) {
                    return Observable.throw('Unauthorized');
                }
            });
    }

    deleteCustomer(apiUrl: string, id: string): Observable<BaseResponse> {
        //this._options.headers.set('Authorization', 'Bearer ' + token);
        return this.http.delete(apiUrl + '/api/Customer/' + id, this.options)
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