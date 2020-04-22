import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CourseModule } from "./course/course.module";
import { CourseResolver } from "./course/course.resolver";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CourseModule],
  providers: [CourseResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
