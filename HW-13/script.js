const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  transactionId: 0,

  createTransaction(amount, type) {
    return {
      id: ++this.transactionId,
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
      console.log('Insufficient funds!');
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
    const transaction = this.transactions.find(tr => tr.id === id);
    if (!transaction) return null;

    const { id: transId, type, amount } = transaction;
    return { transId, type, amount };
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: trType }) => trType === type) 
      .reduce((total, { amount }) => total + amount, 0); 
  },
};

account.deposit(500);
account.withdraw(200);
account.deposit(300);

console.log('Balance:', account.getBalance()); // 600
console.log('Transaction #2:', account.getTransactionDetails(2));
console.log('Total deposits:', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Total withdrawals:', account.getTransactionTotal(Transaction.WITHDRAW));
