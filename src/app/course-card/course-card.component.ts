import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({required:true})
  course:Course

  @Input()
  cardIndex: number
  
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>()


  onCourseViewed(){
    console.log("card component")
    this.courseEmitter.emit(this.course)
  }
}
