/**
 *
 * Date: January 26, 2026
 * Author: Patrick Cuauro
 * Title: user.service.ts
 * Description: This file contains the UserService implementation.
 * Last Modified: January 26, 2026
 * Remarks: N/A
 */

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { loggedIn } from '@angular/fire/auth-guard';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserRoles } from '../model/user-roles';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  // pictureUrl$: Observable<string>;
  roles$: Observable<UserRoles>;

  /**
   * Initializes the UserService with authentication state management.
   *
   * Sets up observable streams for tracking user authentication status and role-based access control.
   *
   * @param afAuth - Angular Fire Authentication service for managing user authentication state
   * @param router - Angular Router service for navigation after authentication state changes
   *
   * @remarks
   * - Creates `isLoggedIn$` observable that emits true when a user is authenticated, false otherwise
   * - Creates `isLoggedOut$` observable that emits the inverse of authentication state
   * - Creates `roles$` observable that extracts user claims from the ID token, defaulting to `{admin: false}` if claims are unavailable
   *
   * @example
   * ```typescript
   * // The service automatically manages authentication streams
   * this.isLoggedIn$.subscribe(loggedIn => {
   *   if (loggedIn) {
   *     // User is authenticated
   *   }
   * });
   * ```
   */
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
  ) {
    afAuth.idToken.subscribe((jwt) => console.log('jwt', jwt));
    afAuth.authState.subscribe((jwt) => console.log('jwt', jwt));
    //only to test the result of the json web token, use the jwt.io page to decode the information showed on the console
    //when successfully logged in

    this.isLoggedIn$ = afAuth.authState.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
    // this.pictureUrl$ = afAuth.authState.pipe(map(user => user? user.photoURL : null));
    // this.roles$ = this.afAuth.idTokenResult.pipe(
    //   map((token) => <any>token?.claims ?? { admin: false }),
    // );
  }
  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      tap(() => {
        this.router.navigate(['/home']);
      },
    error => {
      console.error('Login failed', error);
      // Optionally, you can handle the error by showing a message to the user
    })
    );
  }
  logout() {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
