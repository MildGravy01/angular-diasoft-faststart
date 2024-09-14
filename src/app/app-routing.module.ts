import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  children: [{
    path: "",
    data: {preload: true},
    loadChildren: () => import('./pages/courses-page/courses-page.module').then(m => m.CoursesPageModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
