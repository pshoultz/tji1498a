import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    let base: string = "http://localhost:4200"
    constructor(private http: HttpClient) { }

    //test() {
    //    return this.http.
    //}
}
