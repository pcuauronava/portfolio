import { JudoThrow } from './../model/judo-throws';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { concatMap, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { convertSnaps } from './db-utils';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Injectable({
  providedIn: 'root',
})
export class JthrowService {
  constructor(private db: AngularFirestore) {}

  loadJThrowsByCategory(category: string): Observable<JudoThrow[]> {
    return this.db
      .collection('jthrows', (ref) =>
        ref.where('categories', 'array-contains', category)
      // .orderBy('id')
      )
      .get()
      .pipe(map((result) => convertSnaps<JudoThrow>(result)));
  }
}
