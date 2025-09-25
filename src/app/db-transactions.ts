export const TRANSACTIONS: any = {
  1: {
    account: 'coca1',
    date: new Date('2023-01-01'),
    subcategory: 'groceries',
    category: 'food',
    type: true,
    // true = income, false = expense
    amount: 20.5,
    code: 'na',
    balance: 300,
    transfer: false,
    // true = outgoing transfer, false = incoming transfer
    send: [],
    receive: [],
  },
  2: {
    account: 'coca2',
    date: new Date('2023-01-02'),
    subcategory: 'mortgage',
    category: 'housing',
    type: false,
    // true = income, false = expense
    amount: 450.0,
    code: 'na',
    balance: 500,
    transfer: true,
    // true = outgoing transfer, false = incoming transfer
    send: [],
    receive: [],
  },
  3: {
    account: 'PFC',
    date: new Date('2023-01-03'),
    subcategory: 'income',
    category: 'income',
    type: true,
    // true = income, false = expense
    amount: 115.0,
    code: 'na',
    balance: 2500.0,
    transfer: false,
    // true = outgoing transfer, false = incoming transfer
    send: [],
    receive: [],
  },
};

//This file structure was copied from the file of the firebase course
//to create a pre-formatted data structure database with Judo Throws
//following the formatting of the training

//data structure in the transactions
