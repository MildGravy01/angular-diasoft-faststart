import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../../icourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent {
  @Input()
  courseModel!: ICourse;

  @Output() onEditCourse: EventEmitter<ICourse> = new EventEmitter<ICourse>;
  @Output() onDeleteCourse: EventEmitter<string> = new EventEmitter<string>;

  public onEdit(){
    this.onEditCourse.emit(this.courseModel);
  }

  public onDelete(){
    this.onDeleteCourse.emit(this.courseModel.Id);
  }
  
}
