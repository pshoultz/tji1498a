import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cms-image-edit',
  templateUrl: './cms-image-edit.component.html',
  styleUrls: ['./cms-image-edit.component.css']
})
export class CmsImageEditComponent implements OnInit {
    @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
