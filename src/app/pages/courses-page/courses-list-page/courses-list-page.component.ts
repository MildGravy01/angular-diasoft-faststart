import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ICourse } from '../icourse';

@Component({
  selector: 'app-courses-list-page',
  templateUrl: './courses-list-page.component.html',
  styleUrls: ['./courses-list-page.component.sass']
})
export class CoursesListPageComponent {
   home: MenuItem = {label: 'Курсы', icon: 'pi pi-home', routerLink: '/', separator: true, iconStyle: {marginRight: '10px'}};
   searchValue: string = '';

   onSearch(){
    console.log("Search", this.searchValue);
   }

   ngOnInit(){
    console.log("ngOnInit");
   }
   ngOnChanges(){
    console.log("ngOnChanges");
   }
   ngAfterContentInit(){
    console.log("ngAfterContentInit");
   }
   ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
   }
   ngAfterViewInit(){
    console.log("ngAfterViewInit")
   }
   ngOnDestroy(){
    console.log("ngOnDestroy");
   }




}


