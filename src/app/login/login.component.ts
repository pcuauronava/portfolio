/**
 *
 * Date: January 26, 2026
 * Author: Patrick Cuauro
 * Title: login.component.ts
 * Description: This file contains the LoginComponent implementation.
 * Last Modified: January 26, 2026
 * Remarks: N/A
 */

// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
// import { FirebaseUISignInFailure } from 'firebaseui-angular';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { AuthService } from '../services/auth.service';
// import { appConfig } from '../services/firebaseUI';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { firebase, firebaseui } from 'firebaseui-angular';
import { FirebaseUIModule } from 'firebaseui-angular';
import { FirebaseApp } from '@angular/fire/app';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
    standalone: false
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
  ) {}
  ngOnInit() {}
  onLogin() {
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;
    if (email && password) {
      this.userService.login(email, password);
    }
  }
  onLogout() {
    this.userService.logout();
  }
}
/**
 *
 */
