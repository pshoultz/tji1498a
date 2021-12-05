import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms/cms.component';
import { LoginComponent } from './login/login.component';
import { CmsAddImageComponent} from './cms-add-image/cms-add-image.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'cms', 
        component: CmsComponent,
        //children: [
        //    {
        //        path: 'addImage', 
        //        component: CmsAddImageComponent,
        //    },
        //],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
