import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // private readonly API = '/assets/courses.json';
  private readonly API = 'api/courses';

  constructor(private httpclient: HttpClient) { }

  list() {
    return this.httpclient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }
}
