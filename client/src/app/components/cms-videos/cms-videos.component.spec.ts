import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsVideosComponent } from './cms-videos.component';

describe('CmsVideosComponent', () => {
  let component: CmsVideosComponent;
  let fixture: ComponentFixture<CmsVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
