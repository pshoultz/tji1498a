import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsAddImageComponent } from './cms-add-image.component';

describe('CmsAddImageComponent', () => {
  let component: CmsAddImageComponent;
  let fixture: ComponentFixture<CmsAddImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsAddImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsAddImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
