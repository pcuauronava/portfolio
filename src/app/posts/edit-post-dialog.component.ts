import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../model/posts';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.sass'],
})
export class EditPostDialogComponent {
  form: FormGroup;

  post: Post;

  constructor(
    private dialogRef: MatDialogRef<EditPostDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) post: Post,
    private postService: PostService,
  ) {
    this.post = post;
    this.form = this.fb.group({
      title: [post.title, Validators.required],
      content: [post.content, Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    const changes = this.form.value;
    // using the post service we declare a new variable
    // and assign the values from the form
    // note (patrick): this is only made inside the scope of this function 
    this.postService
      .updatePost(this.post.id, changes)
      // this is going to return an observable
      // we subscribe to it
      .subscribe(() => {
        this.dialogRef.close(changes);
        // we are closing the dialog
        // and emitting the changes
        // to help distinguish between save and close
      });
  }
}
