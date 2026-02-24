import { tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/posts';
import { PostService } from '../services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPostDialogComponent } from './edit-post-dialog.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.sass'],
    standalone: false
})
export class PostsListComponent implements OnInit {
  @Input()
  Posts: Post[];

  @Output()
  postEdited = new EventEmitter();

  @Output()
  postDeleted = new EventEmitter();

  constructor(
    private postService: PostService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {}
  test() {
    alert('test');
  }
  editPost(post: Post) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '400px';

    dialogConfig.data = post;

    this.dialog
      .open(EditPostDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          // note (patrick): this conditional checks if there are changes, if not it does nothing
          //thanks to the afterclosed we can emit an event to the parent component
          // note (patrick): this event is declared previously in this component, lane 23
          // we move now to the main post component to catch this event
          this.postEdited.emit();
        }
      });
  }
  onDeletePost(post: Post) {
    this.postService
      .deletePost(post.id)
      .pipe(
        tap(() => {
          console.log('Deleted post', post);
          this.postDeleted.emit(post);
      }),
      catchError(err => {
        console.log(err);
        alert('There was an error deleting the post');
        return throwError(err);
      }))
      .subscribe();
    // if there is an error we need to handle it and show a message to the user
    // so we use the rxjs pipe function and the logic to handle the success case
    // the arrow function inside tap verifies that the deletion was successful and sends a message to the console
  }
}
