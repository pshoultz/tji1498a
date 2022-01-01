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
    }

    selectComponent(s: string) {
        this.currentComponent = s;
    }

}
