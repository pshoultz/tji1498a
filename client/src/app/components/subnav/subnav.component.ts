import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {

    public currentNavItem: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    select(item: string) {
        this.currentNavItem = item;
    }

}
