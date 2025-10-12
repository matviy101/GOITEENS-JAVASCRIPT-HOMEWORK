const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Withdrawal not possible, insufficient funds.');
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(({ id: transId }) => transId === id) || null;
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: transType }) => transType === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};

account.deposit(500);
account.withdraw(200);
account.deposit(1000);

console.log('Balance:', account.getBalance());
console.log('Transaction 2 details:', account.getTransactionDetails(2));
console.log('Total deposits:', account.getTransactionTotal(Transaction.DEPOSIT));
