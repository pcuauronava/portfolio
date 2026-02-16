import { JudoThrowsListComponent } from './judo-throws/judo-throws-list.component';
// https://www.youtube.com/watch?v=O0uVYhRE850&list=PL1UHgDbN7Tm4SZ6yLE9yDI-YDtf02uc7d minute 5:14
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ResumeComponent } from './resume/resume.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { JudoThrowsComponent } from './judo-throws/judo-throws.component';
import { EditPostDialogComponent } from './posts/edit-post-dialog.component';
import { CookieService } from 'ngx-cookie-service';

import {
  AngularFireAuthModule,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/compat/auth';
import {
  AngularFirestoreModule,
  USE_EMULATOR as USE_FIRESTORE_EMULATOR,
} from '@angular/fire/compat/firestore';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR as USE_FUNCTIONS_EMULATOR,
} from '@angular/fire/compat/functions';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionListComponent } from './transactions/transaction-list.component';
import { CreateTransactionComponent } from './transactions/create-transaction.component';
import { LayeredGridComponent } from './layered-grid/layered-grid.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list.component';
import { PostCreateComponent } from './posts/post-create.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { initializeUI } from '@firebase-oss/ui-core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PresentationsComponent,
    DiagramsComponent,
    ProjectsComponent,
    NavSidebarComponent,
    FooterComponent,
    ResumeComponent,
    FirebaseTestComponent,
    ProjectListComponent,
    JudoThrowsComponent,
    JudoThrowsListComponent,
    TransactionsComponent,
    TransactionListComponent,
    CreateTransactionComponent,
    LayeredGridComponent,
    LoginComponent,
    PostsComponent,
    PostsListComponent,
    PostCreateComponent,
    EditPostDialogComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators
        ? ['http://localhost', 9099]
        : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators
        ? ['http://localhost', 8080]
        : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.useEmulators
        ? ['http://localhost', 5001]
        : undefined,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
