import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})

export class CmsComponent implements OnInit {

    public currentComponent: string = "";

    constructor() { }

    ngOnInit(): void {
        //ApiService.test.subscribe((data: d) => 
    }

    selectComponent(s: string) {
        this.currentComponent = s;
    }

}
