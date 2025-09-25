import { TransactionService } from '../services/transaction.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transactions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass'],
})
export class TransactionListComponent implements OnInit {
  @Input()
  transactions: Transaction[];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {}
}
