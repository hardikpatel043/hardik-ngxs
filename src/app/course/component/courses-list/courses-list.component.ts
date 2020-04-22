import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";
import { LoadCourses } from "../../state/courses.actions";
import { Observable } from "rxjs";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html"
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadCourses());
    this.courses$ = this.store.select(state => state.courses.collection);
  }

  deleteCourse(courseId: string) {}

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
