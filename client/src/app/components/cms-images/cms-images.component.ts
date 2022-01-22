import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cms-images',
  templateUrl: './cms-images.component.html',
  styleUrls: ['./cms-images.component.css']
})

export class CmsImagesComponent implements OnInit {

    public images: any;
    public image: any;
    
    constructor(
        public api: ApiService,
    ) { }

    ngOnInit(): void {
        this.getAds("asdf123");
    }

    uploadImage(event: any) {
        var img = event.target.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(img);

        reader.onload = () => {
            var b64: string = reader.result as string;
            var data: any = {
                "b64": b64.split(",")[1],
                "userID": "asdf123",
                "extension": img.name.split(".")[1]
            };
            debugger
            this.api.uploadImage(data).subscribe(response => {
                debugger
            });
        }
    }

    getAds(userID: string) {
        this.api.getAds("asdf123").subscribe(response => {
            const reader = new FileReader();
            reader.readAsDataURL(response);
            reader.onload = _event => {
                this.image = reader.result;
                debugger
            };
        });
    }

}
