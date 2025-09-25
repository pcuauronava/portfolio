export interface Transaction {
  id: string;
  account: string;
  date: Date;
  seqNo: number;
  subcategory: string;
  category: string;
  type: boolean;
  // true = income, false = expense
  amount: number;
  code: string;
  // unique code for same subcategories, ie other in income and other in food
  balance: number;
  transfer: boolean;
  // true = outgoing transfer, false = incoming transfer
  send: string[];
  receive: string[];
}
