import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsImagesComponent } from './cms-images.component';

describe('CmsImagesComponent', () => {
  let component: CmsImagesComponent;
  let fixture: ComponentFixture<CmsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
