import { JthrowService } from './../services/jthrow.service';
import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {JudoThrow} from "../model/judo-throws";

@Component({
  selector: 'app-judo-throws-list',
  templateUrl: './judo-throws-list.component.html',
  styleUrls: ['./judo-throws-list.component.sass']
})
export class JudoThrowsListComponent  implements OnInit{
  @Input()
  jthrows: JudoThrow[];

    constructor(private jthrowservice: JthrowService
  ){

  }
    ngOnInit(){

  }
}
