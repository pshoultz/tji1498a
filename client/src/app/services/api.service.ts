import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    //NOTE: base path should be read from json config file
    private base: string = "http://localhost:8080";

    constructor(public http: HttpClient) { }

    test() {
        return this.http.get(this.base + "/test");
    }

    uploadImage(data: any) {
        debugger
        return this.http.post(this.base + "/uploadImage", data);
    }

}
