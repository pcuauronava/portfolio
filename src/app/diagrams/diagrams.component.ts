import { Component } from '@angular/core';

@Component({
    selector: 'app-diagrams',
    templateUrl: './diagrams.component.html',
    styleUrls: ['./diagrams.component.sass'],
    standalone: false
})
export class DiagramsComponent {
  panelOpenState = false;
}
