class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    if (this.transactions.length === 0) { return 0; }
    return this.transactions.reduce((a, b) => a + b);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction.value);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  
  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return this.amount * (-1);
  }
}

// NOTE: Missing implementation of not allowing negative balance.


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
console.log('Account status:', myAccount);

t0 = new Deposit(500.00, myAccount);
t0.commit();
console.log('Initial deposit:', t0);
console.log('Balance:', myAccount.balance)

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance)