import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    private baseRoute: string;

    constructor(private http: HttpClient) { 
        this.baseRoute = "http://localhost:8080";
    }

    //NOTE: use this to bring in json file for configuration
    ngOnInit() {
    }

    testRoute(): Observable<any> {
        return this.http.get(this.baseRoute + "/ping");
    }

    addImage() {
        //return this.http.post("localhost:8080/addimage");
    }

}
