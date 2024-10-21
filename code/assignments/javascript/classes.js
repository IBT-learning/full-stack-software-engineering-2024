class BankAccount {
  constructor(ownerName, balance) {
    (this.name = ownerName), (this.balance = 0);
  }

  deposit(amount) {
    if (typeof amount !== "number"){
        console.log("Invalid deposit amount")
    }
    else if (amount > 0) {
      this.balance += amount;
    }
  }

withdraw (amount){
    if (amount <=0 || typeof amount !== 'number'){
        console.log ("Invalid transaction")
    }
    else if (this.balance >= amount){
        this.balance -= amount
    }
    else console.log("You have insufficient funds")
}
}

const person = new BankAccount("Person Mandalas");
person.deposit(400);
console.log(person.balance);
person.withdraw(40);
console.log(person.balance);
