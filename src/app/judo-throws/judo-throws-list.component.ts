import { JthrowService } from './../services/jthrow.service';
// import { Component } from '@angular/core';
import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {JudoThrow} from "../model/judo-throws";
// import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
// import {EditCourseDialogComponent} from "../edit-course-dialog/edit-course-dialog.component";
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-judo-throws-list',
  templateUrl: './judo-throws-list.component.html',
  styleUrls: ['./judo-throws-list.component.sass']
})
export class JudoThrowsListComponent  implements OnInit{
  @Input()
  jthrows: JudoThrow[];

  @Output()
  jthrowEdited = new EventEmitter();

  @Output()
  jthrowDeleted = new EventEmitter();

  constructor(
    private dialog:MatDialog,
    private route:Router,
    private jthrowservice: JthrowService
  ){}
  
    ngOnInit(){

  }
//   onDeleteCourse(course: Course) {
//     this.coursesService.deleteCourseAndLessons(course.id)
//     .pipe(
//         tap(() => {
//             console.log("Deleted course",course);
//             this.courseDeleted.emit(course);
//         }),
//         catchError(err => {
//             console.log(err);
//             alert("Could not delete course.");
//             return throwError(err);
//         })
//     )
//     .subscribe();
// }
// editCourse(course:Course) {

//     const dialogConfig = new MatDialogConfig();

//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;
//     dialogConfig.minWidth = "400px";

//     dialogConfig.data = course;

//     this.dialog.open(EditCourseDialogComponent, dialogConfig)
//         .afterClosed()
//         .subscribe(val => {
//             if (val) {
//                 this.courseEdited.emit();
//             }
//         });

// }

}
