/**
*
* Date: Jan 26, 2026
* Author: Patrick
* Title: Posts Component
* Description: This component displays a list of posts.
* Last Modified: Jan 26, 2026
* Remarks: No additional remarks.
*/

import { Post } from '../model/posts';
import {
  Component,
  OnInit,
  Input,
  Output,
  signal,
  computed,
} from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  title$: Observable<any>;
  content$: Observable<any>;
  info = signal('Initial Info');
  loadedPosts$: Observable<Post[]>;
  activePosts$: Observable<Post[]>;
  // currentId: string;
  constructor(private db: AngularFirestore, private postService: PostService) {}

  // loadPosts(id: string) {
  //   this.currentId = id;
  //   this.posts$ = this.postService.loadPosts(id);
  // }
  
  ngOnInit(): void {
    this.reloadPosts();
  }
  reloadPosts() {
    console.log('loading posts');
    this.activePosts$ = this.postService.loadActivePosts(true);

    // this.loadedPosts$ = this.postService.loadAllPosts();
    this.title$ = this.postService.loadAllPosts();
    this.content$ = this.postService.loadAllPosts();
    // this.posts$ = this.postService.loadPosts('');
    // this.info.set(this.loadedPosts$.toString());
    console.log(this.info());
  }
}
