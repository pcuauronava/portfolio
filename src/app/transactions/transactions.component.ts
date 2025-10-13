import { Transaction } from '../model/transactions';
import { AfterViewInit, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TRANSACTIONS } from '../db-transactions';
import { MatTable } from '@angular/material/table';
import { TransactionListComponent } from './transaction-list.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
})
export class TransactionsComponent implements OnInit {
  housingTransaction$: Observable<Transaction[]>;
  foodTransaction$: Observable<Transaction[]>;
  transportationTransaction$: Observable<Transaction[]>;
  utilitiesTransaction$: Observable<Transaction[]>;

  // @Input()
  // transactions: Transaction[];

  constructor(
    private db: AngularFirestore,
    private transactionService: TransactionService
  ) {}

  async uploadData() {
    console.log('uploading data from transactions component');
    const transactionsCollection = this.db.collection('transactions');
    const transactions = await this.db.collection('transactions').get();
    for (let transaction of Object.values(TRANSACTIONS)) {
      const newTransaction = this.removeId(transaction);
      const transactionRef = await transactionsCollection.add(newTransaction);
      console.log(`Uploading transaction ${['name']}`);
    }
    console.log('data upload complete');
    this.reloadTransactions();
  }
  removeId(data: any) {
    const newData: any = { ...data };
    delete newData.id;
    return newData;
  }

  ngOnInit() {
    this.reloadTransactions(); // Any additional initialization logic can be added here
  }
  reloadTransactions() {
    // console.log('loading transactions');
    this.housingTransaction$ =
      this.transactionService.loadTransactionsByCategory('housing');
    this.foodTransaction$ =
      this.transactionService.loadTransactionsByCategory('food');
    this.transportationTransaction$ =
      this.transactionService.loadTransactionsByCategory('transportation');
    this.utilitiesTransaction$ =
      this.transactionService.loadTransactionsByCategory('utilities');
    console.log('transactions loaded');
  }
}
