import { Component } from '@angular/core';
// import the module for the card component from Angular Material
import { MatCardModule } from '@angular/material/card';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {}
