import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { loggedIn } from "@angular/fire/auth-guard";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserRoles } from "../model/user-roles";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    // pictureUrl$: Observable<string>;
    roles$: Observable<UserRoles>;

    constructor(private afAuth: AngularFireAuth,
        private router: Router) {
        // afAuth.idToken.subscribe(jwt => console.log("jwt",jwt));
        // afAuth.authState.subscribe(jwt => console.log("jwt",jwt));
        //only to test the result of the json web token, use the jwt.io page to decode the information showed on the console
        //when successfully logged in

        this.isLoggedIn$ = afAuth.authState.pipe(map(user => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
        // this.pictureUrl$ = afAuth.authState.pipe(map(user => user? user.photoURL : null));
        this.roles$ = this.afAuth.idTokenResult
            .pipe(
                map(token => <any>token?.claims ?? {admin:false})
            )
    }
    logout() {
        this.afAuth.signOut();
        this.router.navigateByUrl('/login');
      }
}