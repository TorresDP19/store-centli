import { PipeTransform, Pipe } from '@angular/core';
import { Courses } from '../../models/courses_model';

@Pipe({
    name: 'courseFilter'
})

export class CoursesFilterPipe implements PipeTransform {
    transform(courses: Courses[], searchTerm: string): Courses[] {
        if(!courses || !searchTerm) {
            return courses;
        }

        return courses.filter(courses => courses.course_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}