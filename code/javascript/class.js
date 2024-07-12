class BankAccount {
    constructor(ownerName) {
      this.ownerName = ownerName;
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      if (typeof amount !== 'number' || isNaN(amount)) {
        console.log("Invalid amount. Please enter a number.");
        return;
      }
      if (amount < 0) {
        this.withdraw(Math.abs(amount));
      } else {
        this.balance = this.balance + amount;
        this.transactions.push({ type: 'Deposit', amount: amount });
      }
    }
  
    withdraw(amount) {
      if (typeof amount !== 'number' || isNaN(amount)) {
        console.log("Invalid amount. Please enter a number.");
        return;
      }
      if (amount <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
        return;
      }
      if (this.balance >= amount) {
        this.balance =  this.balance - amount;
        this.transactions.push({ type: 'Withdraw', amount: amount });
      } else {
        console.log("Insufficient Funds");
      }
    }
  
    printTransactions() {
      console.log(`Transactions for ${this.ownerName}:`);
      this.transactions.forEach((transaction, index) => {
        console.log(`${index + 1}. ${transaction.type}: $${transaction.amount.toFixed(2)}`);
      });
    }
  }
  
  // Create a new instance of the class for an imaginary person
  const person = new BankAccount("Ella Doe");
  
  // Test the deposit method
  person.deposit(100);
  console.log(person.balance); // Should print 100
  
  // Test the withdraw method
  person.withdraw(50);
  console.log(person.balance); // Should print 50
  
  // Test the overdraft protection
  person.withdraw(100); // Should print "Insufficient Funds"
  console.log(person.balance); // Should still print 50
  
  // Test handling of invalid inputs
  person.deposit("abc"); // Should print "Invalid amount. Please enter a number."
  person.withdraw("xyz"); // Should print "Invalid amount. Please enter a number."
  person.withdraw(-20); // Should print "Invalid amount. Please enter a positive number."
  
  // Test negative deposit
  person.deposit(-30); // Should act as a withdraw
  console.log(person.balance); // Should print 20
  
  // Print all transactions
  person.printTransactions();
  