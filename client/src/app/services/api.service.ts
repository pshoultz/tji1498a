import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    private base: string = "http://localhost:8080";

    constructor(public http: HttpClient) { }

    test() {
        return this.http.get(this.base + "/test");
    }

    addImage(image: any) {
        return this.http.post(this.base + "/addImage", image);
    }

}
