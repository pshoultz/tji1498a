import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    //NOTE: base path should be read from json config file
    private base: string = "http://127.0.0.1:8080";

    constructor(public http: HttpClient) { }

    test() {
        return this.http.get(this.base + "/test");
    }

    //NOTE: works with b64 but this should be sent as a file
    uploadImage(data: any) {
        return this.http.post(this.base + "/uploadImage", data);
    }

    //NOTE: query params not working for API
    getAds(userID: string) {
        //let params = new HttpParams();
        //params = params.append('userID', userID);
        //debugger

        //return this.http.get(this.base + "/getAds", {params: params});
        //return this.http.get(this.base + "/getAds");
        return this.http.get(this.base + "/image");
    }

}
