import { Injectable }     from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
//import { Headers, RequestOptions } from '@angular/http';
import {Asset} from '../shared/model/asset';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AssetService {

    private listAssetsURL = '/api/assets/list/';  // URL to web API
    private addAssetUrl = '/api/assets/add';
    private getAssetUrl = '/api/assets/get';
    private editAssetUrl = '/api/assets/save';
    private returnAssetUrl = '/api/assets/return';
    private fetchAvailableAssetUrl = '/api/assets/fetch/';
    private assignAssetUrl = '/api/assets/save';

    constructor (private http: Http) {}
    getAllocatedAssets (empId: string): Observable<> {
        return this.http.get(this.listAssetsURL + empId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addAsset(asset: Asset): Observable<>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
          .post(this.addAssetUrl, JSON.stringify(asset), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    getById(_id: string): Observable<>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
          .post(this.getAssetUrl, JSON.stringify({'_id':_id}), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    editAsset(asset: Asset): Observable<> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
          .post(this.editAssetUrl, JSON.stringify(asset), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    returnAsset(objId: string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
          .post(this.returnAssetUrl, JSON.stringify({"_id" : objId}), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    getAvailableAssetList(assetName: string){
        return this.http
          .get(this.fetchAvailableAssetUrl + assetName)
          .map(this.extractData)
          .catch(this.handleError);
    }
    assignAsset(id: string, asset: Asset) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
          .post(this.assignAssetUrl, JSON.stringify({"_id" : id, "assetData" : asset}), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
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
