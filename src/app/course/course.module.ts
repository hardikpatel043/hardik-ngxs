import { CommonModule } from "@angular/common";
import { CourseService } from "./services/course.service";
import { CoursesListComponent } from "./component/courses-list/courses-list.component";
import { CoursesStore } from "./state/courses.state";
import { CreateCourseComponent } from "./component/create-course/create-course.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [CoursesListComponent, CreateCourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forRoot([CoursesStore], {
      developmentMode: !environment.production
    })
  ],
  providers: [CourseService],
  bootstrap: [],
  exports: [CoursesListComponent, CreateCourseComponent]
})
export class CourseModule {}
