// JavaScript Assignment #7: Classes. All challenge levels and Extra challenge incorportated.

class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName;
    this.balance = 0.0;
    this.transactionLog = [];
  }

  deposit(amount) {
    if (typeof amount === "number") {
      if (amount > 0) {
        this.balance += amount;
        this.transactionLog.push(amount);
        console.log(
          `Good day ${this.ownerName}, your deposit of $${amount} is successful. Available balance is $${this.balance}`
        );
      } else {
        console.log(`Detected a negative amount, will treat as a withdrawal`);
        this.withdraw(Math.abs(amount));
      }
    } else {
      console.log("Please input numbers as amount!");
    }
  }

  withdraw(amount) {
    if (typeof amount !== "number") {
      console.log("Please input numbers as amount!");
    } else {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.transactionLog.push(-amount);
        console.log(
          `Hello ${this.ownerName}, withdrawal of $${amount} is successful!. Available balance is $${this.balance}`
        );
      } else {
        console.log("Insufficient Funds");
      }
    }
  }

  printTransactions() {
    console.log(this.transactionLog);
  }
}

const person = new BankAccount("Solomon Ojiako");
person.deposit(100);
person.deposit(-10);
// console.log(person.balance);
// person.withdraw("50");
// console.log(person.balance);
person.printTransactions();
