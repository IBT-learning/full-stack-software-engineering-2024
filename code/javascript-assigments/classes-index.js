// Challenge #1: Create a class
class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.balance = 0;
    };

// Challenge #2: Create a class methods

// create deposit method that add amount to the person balance
deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
        console.error("Invalid deposit amount") 
    }
        this.balance += amount;
    };

// create withdraw method that deduct amount from the person balance 
withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
       console.error("Invalid withdrawal amount")
    } else if(amount > this.balance) {
       console.error(`Transaction cancelled due to Insufficient Funds`)
    } else {
       this.balance -= amount;
    }
  }
}

// create an instance for person
const person = new BankAccount("person");

// call the deposit method 
person.deposit(100) // person.balance is 100
person.deposit(100) // person.balance is 200

// call the withdraw method 
person.withdraw(50)  // person.balance is 150
person.withdraw(200) // Transaction cancelled due to Insufficient Funds

// log out the balance
console.log(person.balance);



