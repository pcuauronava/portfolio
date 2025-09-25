import { Transaction } from './../model/transactions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, concatMap, last, map, take, tap } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// I am assuming this import is in case we want to handle file uploads in the future
import firebase from 'firebase/compat';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.sass'],
})
export class CreateTransactionComponent implements OnInit {
  transactionId: string;

  form = this.fb.group({
    account: ['', Validators.required],
    date: [null],
    subcategory: [''],
    category: [''],
    amount: ['', Validators.required],
    type: [false, Validators.required],
    balance: ['', Validators.required],
    transfer: [false, Validators.required],
    send: [null],
    receive: [null],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
