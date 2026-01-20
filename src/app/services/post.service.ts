import { Injectable } from '@angular/core';
import { Post } from '../model/posts';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { concatMap, map } from 'rxjs/operators';
import { Observable, from, pipe } from 'rxjs';
import { convertSnaps } from './db-utils';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private db: AngularFirestore) {}
  patrick(): Observable<Post[]> {
    return this.db
      .collection('posts', (ref) => ref.where('title', '==', 'test'))
      .get()
      .pipe(map((result) => convertSnaps<Post>(result)));
  }
  loadPosts(id: string): Observable<Post[]> {
    return this.db
      .collection(
        'posts',
        (ref) => ref.orderBy('id', 'asc'),
        // ref.orderBy('id', 'asc')
        //  .limit(1)
        // ref.where('id', '==', id)
        // .orderBy('id')
      )
      .get()
      .pipe(map((result) => convertSnaps<Post>(result)));
  }
  loadAllPosts(): Observable<Post[]> {
    return this.db
      .collection('posts', (ref) => ref.orderBy('id', 'asc'))
      .get()
      .pipe(map((result) => convertSnaps<Post>(result)));
  }
  loadActivePosts(active: boolean): Observable<Post[]> {
    return this.db
      .collection('posts', (ref) =>
        ref.where('active', '==', active).orderBy('id', 'asc'),
      )
      .get()
      .pipe(map((result) => convertSnaps<Post>(result)));
  }
  createPost(newPost: Partial<Post>, postId?: string) {
    // 1 CRUD - Createz
    // API to create a new post
    // In the case of the firebase course the model have sequential numbers
    // In this case I only have an ID number
    return (
      this.db
        .collection('posts', (ref) => ref.orderBy('id', 'asc').limit(1))
        // This will access the collection, being the first argument the name of the collection, and the second a function to order the results
        // and limit to only one result which will be the last post created, because it has the highest ID

        // Reminder: the service must be included in the constructor of the component
        .get()
        .pipe(
          concatMap((result) => {
            const posts = convertSnaps<Post>(result);
            const lastPostId = posts[0]?.id ?? 0;
            const post = {
              ...newPost,
              id: postId ?? (Number(lastPostId) + 1).toString(),
            };
            let save$: Observable<any>;
            if (postId) {
              save$ = from(this.db.doc(`posts/${postId}`).set(post));
            } else {
              save$ = from(this.db.collection('posts').add(post));
            }
            return save$.pipe(
              map((res) => {
                return {
                  id: postId ?? res.id,
                  ...post,
                };
              }),
            );
          }),
        )
    );
  }
  updatePost(postId: string, changes: Partial<Post>): Observable<any> {
    return from(this.db.doc(`posts/${postId}`).update(changes));
    // 2 CRUD - Update
  }
  deletePost(postId: string) {
    return from(this.db.doc(`posts/${postId}`).delete());
    // 4 CRUD - Delete
  }
}
// 1 CRUD - Create
// this function is called from the postCreate component
//
// 2 CRUD - Update
//
