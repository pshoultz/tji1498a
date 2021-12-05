import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cms-add-image',
  templateUrl: './cms-add-image.component.html',
  styleUrls: ['./cms-add-image.component.scss']
})
export class CmsAddImageComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
