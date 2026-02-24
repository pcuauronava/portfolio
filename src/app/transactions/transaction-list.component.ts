import { TransactionService } from '../services/transaction.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from '../model/transactions';
import { tap } from 'rxjs';

@Component({
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.sass'],
    standalone: false
})
export class TransactionListComponent implements OnInit {
  @Input()
  transactions: Transaction[];

  @Output()
  transactionDeleted = new EventEmitter<Transaction>();

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {}
  onDeleteTransaction(transaction: Transaction) {
    this.transactionService.deleteTransaction(transaction.id)
    .pipe(
      tap(() => {
        console.log("Transaction deleted", transaction);
        this.transactionDeleted.emit(transaction);
      })
    )
    .subscribe();
    // we have to take in consideration, the case of an error
  }
}
