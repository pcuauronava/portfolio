import { JudoThrow } from './../model/judo-throws';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { JTHROWS } from '../db-data';
import { MatTable } from '@angular/material/table';

// import { JthrowServices } from ''

// import { CoursesService } from '../services/courses.services';
// TODO: create the services for the throws, in the example from the firebase course
//the services are called CourseServices, and as Throw is a exclusive name, I decided
//to use a J in front of throw.

@Component({
  selector: 'app-judo-throws',
  templateUrl: './judo-throws.component.html',
  styleUrls: ['./judo-throws.component.sass'],
})
export class JudoThrowsComponent implements OnInit{
  constructor(private db: AngularFirestore) {

    // te-wazaThrows$: Observable<JTHROWS[]>;
    // koshi-wazaThrows$: Observable<JTHROWS[]>;
    // ashi-wazaThrows$: Observable<JTHROWS[]>;
    // sutemi-wazaThrows$: Observable<JTHROWS[]>;
    // osae-komi-wazaThrows$: Observable<JTHROWS[]>;
    // shime-wazaThrows$: Observable<JTHROWS[]>;
    // kansetsu-wazaThrows$: Observable<JTHROWS[]>;

  }
  
  async uploadData() {
    const jthrowsCollection = this.db.collection('jthrows');
    const jthrows = await this.db.collection('jthrows').get();
    for (let jthrow of Object.values(JTHROWS)) {
      const newJthrow = this.removeId(jthrow);
      const jthrowRef = await jthrowsCollection.add(newJthrow);
      //Using the example form the firebase course, there are lessons in the course
      //but in this case the judo throws don't have a sub category.
      console.log(`Uploading throw ${['name']}`);
    }
  }
  removeId(data: any) {
    const newData: any = { ...data };
    delete newData.id;
    return newData;
  }
  onReadDoc() {
    this.db
      .doc('/jthows/ldfIaOyRG130uZoChQ8B')
      .get()
      .subscribe((snap) => {
        console.log(snap.id);
        console.log(snap.data());
      });
  }
  onReadCollection() {
    console.log('function not implemented yet');
    // this.db
    // .collection("/jthrows/0w6c9M4GlJvTD8iUV9rW")
  }
  ngOnInit() {
    // this.te-wazaThrows$ = this.
  }
}
