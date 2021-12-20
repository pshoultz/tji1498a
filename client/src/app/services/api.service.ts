import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    private base: string = "http://localhost:4200";

    constructor(http: HttpClient) { }

    test() {
        //return this.http.get<any>(base + "/test");
    }

    //addImage() {
    //    return this.http.post
    //}

}
