import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Body } from "@angular/http/src/body";
import {ResponseContentType} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {
    SignupModel, CustomerModel
} from '../models/genericModels';


@Injectable()
export class CustomerService {

    private constants: string;

    constructor(private _http: Http, private _options: RequestOptions) {}

    GetCustomers(apiUrl: string): Observable<any[]> {
        return this._http.get(apiUrl + '/api/Customer', this._options)
            .map((response: Response) => <CustomerModel[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().ExceptionMessage || 'Server Error');
    }
}