import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

    currentActive: string = "";

    constructor(private api: ApiService) { 
    }

    ngOnInit(): void {
        this.api.testRoute().subscribe(data => {
            debugger
        });
    }

    changeActive(s: string) {
        this.currentActive = s;
    }
}
