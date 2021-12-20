import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttractComponent } from './components/attract/attract.component';
import { CmsComponent } from './components/cms/cms.component';
import { CmsImagesComponent } from './components/cms-images/cms-images.component';
import { CmsVideosComponent } from './components/cms-videos/cms-videos.component';

const routes: Routes = [
    {
        path: '', component: AttractComponent
    },
    {
        path: 'cms', component: CmsComponent
        //children: [
        //    {
        //        path: 'images', component: CmsImagesComponent,
        //    },
        //    {
        //        path: 'videos', component: CmsVideosComponent,
        //    }
        //]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
