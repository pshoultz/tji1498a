import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cms-images',
  templateUrl: './cms-images.component.html',
  styleUrls: ['./cms-images.component.css']
})

export class CmsImagesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    addImage(event: any) {
        var img = event.target.files[0];
        debugger
    }

}
