import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsEditImageComponent } from './cms-edit-image.component';

describe('CmsEditImageComponent', () => {
  let component: CmsEditImageComponent;
  let fixture: ComponentFixture<CmsEditImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsEditImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
