//Challenge 1
class BankAccount {
    constructor(ownerName){
        this.ownerName = ownerName;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
      }
    
    withdraw(amount) {
        if (amount > this.balance){
            console.log("Insufficient Funds")
        }
        else {
            this.balance -= amount;
        }
    }
}

const person = new BankAccount("Kemi Olusanni");
console.log(person);

person.deposit(100)
console.log(person.balance)

person.withdraw(50)
console.log(person.balance)

