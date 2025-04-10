import { Component} from '@angular/core';
import {COURSES} from '../db-data';
import EventEmitter from 'events';
import { Course } from './model/course';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

 courses= COURSES
     

 onCourseSelected(course:Course){
    console.log(course)
 }
 
 trackCourse(index:number, course:Course){
    return course.id
 }

}
