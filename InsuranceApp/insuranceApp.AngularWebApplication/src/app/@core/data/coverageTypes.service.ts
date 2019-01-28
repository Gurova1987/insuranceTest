import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Body } from "@angular/http/src/body";
import {ResponseContentType} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { SignupModel, CoverageType, BaseResponse } from '../models/genericModels';

@Injectable()
export class CoverageTypeService {

    private constants: string;

    constructor(private http: Http, private options: RequestOptions) {}

    getAll(apiUrl: string): Observable<any[]> {
        return this.http.get(apiUrl + '/api/CoverageType', this.options)
            .map((response: Response) => <CoverageType[]>response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().ExceptionMessage || 'Server Error');
    }
}