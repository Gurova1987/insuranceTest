import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ConfigSite } from '../models/genericModels';

@Injectable()

export class ConfigService {

    constructor(private _http: Http, private _options: RequestOptions) { }

    GetConfig(): Observable<ConfigSite> {
        return this._http.get("../../assets/config.json")
            .map((response: Response) => <ConfigSite>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}