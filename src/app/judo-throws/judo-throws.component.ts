import { JudoThrow } from './../model/judo-throws';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JthrowService } from '../services/jthrow.service';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { JTHROWS } from '../db-data';
import { MatTable } from '@angular/material/table';
import { JudoThrowsListComponent } from './judo-throws-list.component';

// TODO: create the services for the throws, in the example from the firebase course
//the services are called CourseServices, and as Throw is a exclusive name, I decided
//to use a J in front of throw.

@Component({
    selector: 'app-judo-throws',
    templateUrl: './judo-throws.component.html',
    styleUrls: ['./judo-throws.component.sass'],
    standalone: false
})
export class JudoThrowsComponent implements OnInit {
  tewazaThrows$: Observable<JudoThrow[]>;
  koshiwazaThrows$: Observable<JudoThrow[]>;
  ashiwazaThrows$: Observable<JudoThrow[]>;
  sutemiwazaThrows$: Observable<JudoThrow[]>;
  osaekomiwazaThrows$: Observable<JudoThrow[]>;
  shimewazaThrows$: Observable<JudoThrow[]>;
  kansetsuwazaThrows$: Observable<JudoThrow[]>;

  constructor(
    private db: AngularFirestore,
    private jthrowService: JthrowService
  ) {}

  async uploadData() {
    console.log('before action');
    const jthrowsCollection = this.db.collection('jthrows');
    const jthrows = await this.db.collection('jthrows').get();
    for (let jthrow of Object.values(JTHROWS)) {
      const newJthrow = this.removeId(jthrow);
      const jthrowRef = await jthrowsCollection.add(newJthrow);
      //Using the example form the firebase course, there are lessons in the course
      //but in this case the judo throws don't have a sub category.
      console.log(`Uploading throw ${['name']}`);
      console.log('after action');
    }
  }
  removeId(data: any) {
    const newData: any = { ...data };
    delete newData.id;
    return newData;
  }

  ngOnInit() {
    this.reloadJthrows();
  }
  reloadJthrows() {
    console.log('loading throws');
    this.tewazaThrows$ = this.jthrowService.loadJThrowsByCategory('Te-waza');
    this.koshiwazaThrows$ =
      this.jthrowService.loadJThrowsByCategory('Koshi-waza');
    this.ashiwazaThrows$ =
      this.jthrowService.loadJThrowsByCategory('Ashi-waza');
    this.sutemiwazaThrows$ =
      this.jthrowService.loadJThrowsByCategory('Sutemi-waza');
    this.osaekomiwazaThrows$ =
      this.jthrowService.loadJThrowsByCategory('Osae-komi-waza');
    this.shimewazaThrows$ =
      this.jthrowService.loadJThrowsByCategory('Shime-waza');
    this.kansetsuwazaThrows$ =
      this.jthrowService.loadJThrowsByCategory('Kansetsu-waza');
    console.log('throws loaded');
  }
}
