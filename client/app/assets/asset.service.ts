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
    private assignAssetUrl = '/api/assets/assign';
    private listAllAssetUrl = '/api/assets/listall';
    private listEmail = '/api/users/listemail';
    private assignEmpIdUrl = '/api/users/assignempid';

  constructor (private http: Http) {}

  /**
   * Makes a get request to get all assets allocated to a particular employee.
   * @param empId
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  getAllocatedAssets (empId: string): Observable<> {
    return this.http.get(this.listAssetsURL + empId)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Makes a post request to add a new asset.
   * @param asset
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  addAsset(asset: Asset): Observable<>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    asset.isAvailable = true;
    return this.http
      .post(this.addAssetUrl, JSON.stringify(asset), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Makes a post request to get an Asset by the object ID
   * @param _id
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  getById(_id: string): Observable<>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.getAssetUrl, JSON.stringify({'_id':_id}), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Makes a post request to edit an Asset
   * @param asset
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  editAsset(asset: Asset): Observable<> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.editAssetUrl, JSON.stringify(asset), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Makes a get request to get all Assets
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  listAllAsset(): Observable<> {
    return this.http
      .get(this.listAllAssetUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  listEmpEmail(): Observable<> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .get(this.listEmail)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Makes a post request to update 'isAvailable' to true by the object ID
   * @param objId
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
    returnAsset(objId: string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
          .post(this.returnAssetUrl, JSON.stringify({"_id" : objId}), {headers: headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

  /**
   * Makes a get request to get all Assets whose 'isAvailable' is true
   * @param assetName
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  getAvailableAssetList(assetName: string){
    return this.http
      .get(this.fetchAvailableAssetUrl + assetName)
      .map(this.extractData)
      .catch(this.handleError);
  }

  assignEmpId(employee: {}) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.assignEmpIdUrl, employee, {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Makes a post request to assign an available asset to an Employee
   * @param objectId
   * @param asset
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  assignAsset(objectId: string, asset: Asset) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.assignAssetUrl, {"_id" : objectId, "assetData" : asset}, {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Returns the data received in JSON format
   * @param res
   * @returns {*|{}}
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  /**
   * Handles error if there is an error in http request
   * @param error
   * @returns {ErrorObservable}
   */
    private handleError (error: any) {
        console.log(JSON.stringify(error));
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(">>>>>>>>>>>>>>>"+errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}
