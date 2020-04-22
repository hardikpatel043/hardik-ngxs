import { Action, State, StateContext } from "@ngxs/store";

import { Course } from "../model/course.model";
import { CourseService } from "../services/course.service";
import { Injectable } from "@angular/core";
import { LoadCourses } from "./courses.actions";
import { tap } from "rxjs/operators";

interface CoursesState {
  collection: Course[];
}

@State<CoursesState>({
  name: "courses",
  defaults: { collection: [] }
})
@Injectable()
export class CoursesStore {
  constructor(private readonly courseService: CourseService) {}

  @Action(LoadCourses)
  loadCourses(
    { patchState, dispatch }: StateContext<CoursesState>,
    {}: LoadCourses
  ) {
    dispatch({});

    return this.courseService.getAllCourses().pipe(
      tap(content => {
        patchState({ collection: content });
      })
    );
  }
}
