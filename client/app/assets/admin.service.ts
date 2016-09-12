import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
//import { Headers, RequestOptions } from '@angular/http';
import {Logistics} from '../shared/model/logistics';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AdminService {

    private listAssetsURL = '/api/Logistics/list/';  // URL to web API
    private addAssetUrl = '/api/Logistics/add';
    constructor (private http: Http) {}
    getAllocatedAssets (empId: string): Observable<Logistics[]> {

        this.listAssetsURL+= empId;
        //let body = JSON.stringify({ empId });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });

        return this.http.get(this.listAssetsURL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addAsset(asset: Logistics): Observable<>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
          .post(this.addAssetUrl, JSON.stringify(asset), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}
