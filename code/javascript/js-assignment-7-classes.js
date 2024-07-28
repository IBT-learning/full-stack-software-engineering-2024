class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName;
    this.balance = 0;
  }

//const person = new BankAccount("Ngozi Clara");
//console.log(person);

// Challenge 2: Create class methods

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient Funds");
    }
  }
}

const person = new BankAccount("Ngozi Clara");

person.deposit(100);
console.log(person.balance);

person.withdraw(50);
console.log(person.balance);

person.withdraw(60);
console.log(person.balance);
