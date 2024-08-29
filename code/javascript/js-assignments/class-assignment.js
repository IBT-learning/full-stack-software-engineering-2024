// Challenge #1: Create a class
// Create a new class BankAccount with attributes ownerName and balance
// ownerName should be passed in to the constructor
// balance should be initialized as 0
class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    balance = 0;
    this.balance = balance;
  }
  // Challenge #2: Create class methods
  // Create a method deposit that takes one argument, amount. The method should increase the balance by that amount.

  deposit(amount) {
    if (typeof amount !== "number") {
      return `Numbers Only`;
    }
    // What happens if you pass a negative number to the deposit method? Can your method detect that situation, and call this.withdraw instead? (Math.abs() might help you here.)
    if ((amount = -amount)) {
      amount = Math.abs(amount);
      return this.balance + amount;
    }
    return this.balance + amount;
  }

  // Now do the same, with a withdraw method that reduces the balance.
  withdraw(amount) {
    // What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
    if (typeof amount !== "number") {
      return `Numbers Only`;
    }
    // Don't let people overdraft! Have the withdraw method first check the balance, and if there isn't enough money, cancel the transaction and print a message that says "Insufficient Funds"
    if (amount > this.balance) {
      return `You have Insufficient Funds`;
    } else {
      return this.balance - amount;
    }
  }
}
// Create a new instance of the class for an imaginary person, person
const Enny = new BankAccount("Eniola Yussuff", "balance");
console.log(Enny);

// Call person.deposit(100) and then console log person.balance. It should say 100.
console.log(Enny.deposit(100));

// What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
console.log(Enny.deposit("2a0"));

// What happens if you pass a negative number to the deposit method? Can your method detect that situation, and call this.withdraw instead? (Math.abs() might help you here.)
console.log(Enny.deposit(-200));

console.log(Enny.withdraw(200));

// Extra challenges (optional)

// Can you keep a log of the user's transactions? Try storing this information in whatever way seems appropriate to you.
// How about a printTransactions method that gives the users a nicely formatted list of transations?
