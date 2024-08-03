class BankAccount {
    constructor(ownerName) {
      this.ownerName = ownerName;
      this.balance = 0;
      this.transactions = []; // Array to store transactions
    }
  
    deposit(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.error("Invalid deposit amount. Please enter a positive number.");
      }
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount, newBalance: this.balance});
    }
  
    withdraw(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.error("Invalid withdrawal amount. Please enter a positive number.");
      }
      if (amount > this.balance) {
        console.error("Insufficient Funds");
      } else {
        this.balance -= amount;
        this.transactions.push({ type: "withdrawal", amount, newBalance: this.balance});
      }
    }
  
    printTransactions() {
      if (this.transactions.length === 0) {
        console.log("No transactions to display.");
        return;
      }
      console.log("Transaction History for", this.ownerName);
      for (const transaction of this.transactions) {
        const formattedAmount = transaction.amount.toFixed(2); // Format to 2 decimal places
        const formattedBalance = transaction.newBalance.toFixed(2);
        console.log(`Type: ${transaction.type} | Amount: ${formattedAmount} | Balance: ${formattedBalance}`);
      }
    }
  }
  
  // Create an instance for person
  const personAccount = new BankAccount("person");
  
  // Make some transactions
  personAccount.deposit(200);
  personAccount.withdraw(150);
  personAccount.deposit(475);
  personAccount.withdraw(210);
  
  // Print the transactions
  personAccount.printTransactions();

/* 
  Transaction History for person
  Type   | Amount | Balance
  deposit | 200.00 | 200.00
  withdrawal | 150.00 | 50.00
  deposit | 475.00 | 525.00
  withdrawal | 210.00 | 315.00
*/ 