import { Component, Output } from '@angular/core';
import { ICourse } from '../../../icourse';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent {
  items!: ICourse[];
  

  ngOnInit(){
    this.items = [
    { Id: '1', Title: 'Курс 1', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', CreationDate: '3 мая 2024 года', Duration: 50},
    { Id: '2', Title: 'Курс 2', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', CreationDate: '4 мая 2024 года', Duration: 50}];
  }
  editCourse(courseItem:ICourse){
    console.log('Course', courseItem);
   }


   onLoadMore(){
    console.log("Loading more...");
   }

   deleteCourse(id:string){
    console.log('Delete', id);
   }
}
