// CHALLENGE  1
class BankAccount {
    constructor (name) {
        this.ownerName = name;
        this.balance = 0;
    }

    deposit (amount) {
        this.balance += amount
    }

    withdraw (amount) {
        if (this.balance > amount) {
            this.balance -= amount
        } else {
            console.log("Insufficient Funds");
        }
    }
}

const person = new BankAccount ("Melanie")
console.log(person);

person.deposit(100)
console.log(person.balance);
person.withdraw(200)
console.log(person.balance);




// PART B - Extra Challenges
// 1. 



