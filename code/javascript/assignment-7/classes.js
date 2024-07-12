// Challenge #1: Create a class

// Create a new class BankAccount with attributes ownerName and balance
// ownerName should be passed in to the constructor
// balance should be initialized as 0
// Create a new instance of the class for an imaginary person, person

class BankAccount {
  constructor(ownerName) {
    this.name = ownerName;
    this.balance = 0;
  }

  // Challenge #2: Create class methods

  // Create a method deposit that takes one argument, amount.
  // The method should increase the balance by that amount.

  deposit(amount) {
    this.balance += amount;
  }

  // Now do the same, with a withdaw method that reduces the balance.
  // Don't let people overdraft! Have the withdraw method first check the balance,
  // and if there isn't enough money, cancel the transaction and print a message
  // that says "Insufficient Funds"
  withdrawal(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient Funds");
    }
  }
}

const person = new BankAccount("Hulk Hogan");

console.log(person);

// Call person.deposit(100) and then console log person.balance. It should say 100.
person.deposit(100);
console.log(person.balance); // 100

// person.withdrawal(150);
// console.log(person.balance) // insufficient funds

person.withdrawal(80);
console.log(person.balance); // 20
