/**
 *
 * Date: January 26, 2026
 * Author: Patrick Cuauro
 * Title: nav-sidebar.component.ts
 * Description: TypeScript file for the navigation sidebar component in an Angular application.
 * Last Modified: January 26, 2026
 * Remarks: Needs to improve the icons and styling of the sidebar for better user experience.
 *
 */

import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
    selector: 'app-nav-sidebar',
    templateUrl: './nav-sidebar.component.html',
    styleUrls: ['./nav-sidebar.component.scss'],
    standalone: false
})
export class NavSidebarComponent {
  // private userService = inject(UserService);
  // this way of injection services could be the answer to the firebase ui issue

  constructor(public user: UserService) {}
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  onLogout() {
    this.user.logout();
  }
}
