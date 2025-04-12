import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
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

  isImageVisible(){
    console.log('Course:', this.course);
    console.log('Icon URL:', this.course.iconUrl);
    return this.course && this.course.iconUrl
  }  
  
  cardClasses(){

    if(this.course.category == 'BEGINNER') return ['beginner']
    // return{
    //   'beginner':this.course.category == 'BEGINNER',
    // }
  }
  cardStyle(){
    return {'text-decoration':'underline'}
  }

  onCourseViewed(){
    console.log("card component")
    this.courseEmitter.emit(this.course)
  }
}
