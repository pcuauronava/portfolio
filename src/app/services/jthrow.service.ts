import { JudoThrow } from './../model/judo-throws';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { concatMap, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { convertSnaps } from './db-utils';
import OrderByDirection = firebase.firestore.OrderByDirection;


@Injectable({
  providedIn: 'root'
})
export class JthrowService {

  constructor(private db: AngularFirestore) {
    
  }

//   findLessons (courseId:string, sortOrder: OrderByDirection = 'asc',
//       pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
//           return this.db.collection(`courses/${courseId}/lessons`,
//               ref => ref.orderBy("seqNo", sortOrder)
//               .limit(pageSize)
//               .startAfter(pageNumber * pageSize)
//               //fluid API
//           )
//           .get()
//           .pipe(
//               map(results => convertSnaps<Lesson>(results))
//           )
//       }

  //sortOrder and page number properties are for the pagination of the lessons of the course
  //fluid API?? Vasco mentions it on lesson 28
  
//   findJThrowsByUrl(courseUrl: string) : Observable<Course | null> {
//       return this.db.collection("courses",
//           ref => ref.where("url","==",courseUrl))
//       .get()
//       .pipe(
//           map(results => {
//               const courses = convertSnaps<Course>(results);

//               return courses.length == 1 ? courses[0] : null ;
//           })
//       );
//   }

  loadJThrowsByCategory(category:string):Observable<JudoThrow[]>{
    return this.db.collection(
        "jthrows", ref => ref.where("categories","array-contains",category).orderBy("id")
    )
    .get()
    .pipe(map(result => convertSnaps<JudoThrow>(result)));
  }

//   deleteCourseAndLessons(courseId:string) {
//       return this.db.collection(`courses/${courseId}/lessons`)
//       .get()
//       .pipe(
//           concatMap( results => {
//               const lessons = convertSnaps<Lesson>(results);

//               const batch = this.db.firestore.batch();

//               const courseRef = this.db.doc(`courses/${courseId}`).ref;

//               batch.delete(courseRef);

//               for(let lesson of lessons) {
                  
//                   const lessonRef = 

//                       this.db.doc(`courses/${courseId}/lessons/${lesson.id}`).ref;

//                       batch.delete(lessonRef);

//               }

//               return from(batch.commit());
//           })
//       )
//   }

  deleteCourse(courseId: string) {
      return from(this.db.doc(`courses/${courseId}`).delete());
  }
//   updateCourse(courseId: string, changes: Partial<Course>):Observable<any> {
//       return from(this.db.doc(`courses/${courseId}`).update(changes));
//   }

//   createCourse(newCourse: Partial<Course>, courseId?:string) {

//       return this.db.collection("courses",
//           ref => ref.orderBy("seqNo", "desc").limit(1))
//           .get()
//           .pipe(
//               concatMap(result => {
//                   const courses = convertSnaps<Course>(result);
//                   const lasCourseSeqNo = courses[0]?.seqNo ?? 0;
//                   const course = {
//                       ...newCourse,
//                       seqNo: lasCourseSeqNo + 1
//                   }
//                   let save$: Observable<any>;
//                   if (courseId) {
//                       save$ = from(this.db.doc(`courses/${courseId}`).set(course));
//                   }
//                   else {
//                       save$ = from(this.db.collection("courses").add(course));
//                   }
//                   return save$
//                       .pipe(
//                           map(res => {
//                               return {
//                                   id: courseId ?? res.id,
//                                   ...course
//                               }
//                           })
//                       )

//               })
//           )
//   }

//   loadCoursesByCategory(category: string): Observable<Course[]> {
//       return this.db.collection(
//           "courses",
//           ref => ref.where("categories", "array-contains", category)
//               .orderBy("seqNo")
//       )
//           .get()
//           .pipe(
//               map(result => convertSnaps<Course>(result))
//           );
//   }
}
