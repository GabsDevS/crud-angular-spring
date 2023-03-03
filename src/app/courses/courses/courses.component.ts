import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){}

  courses: Course[] = [
    {_id: '1', name: 'Angular', category:'front-end'}
  ];
  displayedColumns = ['name', 'category'];



}
