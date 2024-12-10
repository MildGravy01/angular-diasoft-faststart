import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListPageComponent } from './courses-list-page/courses-list-page.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CourseItemComponent } from './courses-list-page/components/course-item/course-item.component';
import { CourseListComponent } from './courses-list-page/components/course-list/course-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CoursesListPageComponent
  }
];

@NgModule({
  declarations: [
    CoursesListPageComponent,
    CourseItemComponent,
    CourseListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbModule,
    ButtonModule,
    InputTextModule,
    RouterModule.forChild(routes)
  ],
})
export class CoursesPageModule { }
