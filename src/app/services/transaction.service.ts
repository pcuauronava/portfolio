import firebase from 'firebase/compat/app';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Transaction } from '../model/transactions';
import { concatMap, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { convertSnaps } from './db-utils';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private db: AngularFirestore) {}

  loadTransactionsByCategory(category: string): Observable<Transaction[]> {
    return this.db
      .collection('transactions', (ref) =>
        ref.where('category', 'array-contains', category)
      )
      .get()
      .pipe(map((result) => convertSnaps<Transaction>(result)));
  }

  createTransaction(
    newTransaction: Partial<Transaction>,
    transactionId?: string
  ) {
    return this.db
      .collection('transactions', (ref) =>
        ref.orderBy('category', 'desc').limit(1)
      )
      .get()
      .pipe(
        concatMap((result) => {
          const transactions = convertSnaps<Transaction>(result);
          const lastTransactionSeqNo = transactions[0]?.seqNo ?? 0;
          const transaction = {
            ...newTransaction,
            seqNo: lastTransactionSeqNo + 1,
          };
          let save$: Observable<any>;
          if (transactionId) {
            save$ = from(
              this.db.doc(`transactions/${transactionId}`).set(transaction)
            );
          } else {
            save$ = from(this.db.collection('transactions').add(transaction));
          }
          return save$.pipe(
            map((res) => {
              return {
                id: transactionId ?? res.id,
                ...transaction,
              };
            })
          );
        })
      );
  }
}
