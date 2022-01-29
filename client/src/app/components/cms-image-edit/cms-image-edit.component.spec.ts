import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsImageEditComponent } from './cms-image-edit.component';

describe('CmsImageEditComponent', () => {
  let component: CmsImageEditComponent;
  let fixture: ComponentFixture<CmsImageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsImageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
