import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cms-images',
  templateUrl: './cms-images.component.html',
  styleUrls: ['./cms-images.component.css']
})

export class CmsImagesComponent implements OnInit {

    constructor(public api: ApiService) { }

    ngOnInit(): void {
        //this.api.test().subscribe();
    }

    uploadImage(event: any) {
        var img = event.target.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(img);
        reader.onload = () => {
            //reader.result;
            this.api.uploadImage(reader.result).subscribe(response => {
                debugger
            });
        }
    }

}
