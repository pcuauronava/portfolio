import { JudoThrowsComponent } from './judo-throws/judo-throws.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { LayeredGridComponent } from './layered-grid/layered-grid.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostCreateComponent } from './posts/post-create.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'presentations', component: PresentationsComponent },
  { path: 'diagrams', component: DiagramsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'firebase-test', component: FirebaseTestComponent },
  { path: 'judo-throws', component: JudoThrowsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'layered-grid', component: LayeredGridComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts-create', component: PostCreateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
