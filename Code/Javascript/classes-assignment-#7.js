// Challenge #1: Create a class

class BankAccount {
    constructor(ownerName) {
        this.name = ownerName
        this.balance = 0
    }


// Challenge #2 Create class methods
deposit(amount) {
  this.balance += amount
  console.log(`${this.name} Your deposit of Ksh ${amount} is succesful`);
 }

withdraw(amount){
    if (amount > this.balance) {
        console.log("Insufficient Funds");
    } else {
        this.balance -= amount
        console.log("Withdraw successful");
    }
 }

}
const person = new BankAccount("Monica Wonder")
console.log(person.name);

console.log(person.deposit(100))
console.log(person.balance);

console.log(person.withdraw(10))
console.log(person.balance);

console.log(person.withdraw(1000))
console.log(person.balance);