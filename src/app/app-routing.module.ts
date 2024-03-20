import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'presentations', component: PresentationsComponent },
  { path: 'diagrams', component: DiagramsComponent },
  { path: 'projects', component: ProjectsComponent  },
  { path: 'resume', component: ResumeComponent },
  { path: 'firebase-test', component : FirebaseTestComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
