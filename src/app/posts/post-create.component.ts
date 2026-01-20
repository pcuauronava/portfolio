import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Post } from '../model/posts';
import { PostService } from '../services/post.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, concatMap, last, map, take, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.sass'],
})
export class PostCreateComponent implements OnInit {
  postId: string;
  form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    active: [true],
  });
  constructor(private fb: FormBuilder, private postService: PostService, private afs: AngularFirestore, private router: Router) {}
  ngOnInit() {
    this.postId = this.afs.createId();
    
  }
  onCreatePost() {
    // 1 CRUD - Create
    const newPost = { ...this.form.value } as Post;
    console.log(newPost);
    this.postService.createPost(newPost, this.postId)
        .pipe(
          tap(() => {
            console.log(newPost, this.postId);
            this.router.navigateByUrl('/posts');
          }),
          catchError(err => {
            console.log('Error creating post:', err);
            alert('There was an error creating the post');
            return throwError(err);
          })
        )
      .subscribe();
  }
}
// 1 CRUD - Create
// This component allows users to create a new post by filling out a form.
// It uses Angular's Reactive Forms for form handling and validation.
// Upon submission, it calls the PostService to create the post in the database.
// If successful, it navigates back to the posts list; if there's an error, it alerts the user.