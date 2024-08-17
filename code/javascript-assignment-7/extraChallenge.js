// Extra Challenge
class BankAccount {
    constructor(ownerName){
        this.ownerName = ownerName;
        this.balance = 200;
        this.transactions = [];
    }
    deposit(amount) {
        if(amount < 0){
            this.withdraw(Math.abs(amount));
        }
        else {
        this.balance += amount;
        this.transactions.push({type:"Deposit", amount:amount, balance: this.balance});
        }
      }
    
    withdraw(amount) {
        if (amount > this.balance){
            console.log("Insufficient Funds")
        }
        else {
            this.balance -= amount;
            this.transactions.push({type:"Withdraw", amount:amount, balance: this.balance});
        }
    }

    printTransactions(){
        console.log(`Transaction log for ${this.ownerName}`);
        for(let transaction of this.transactions){
            console.log(`${transaction.type}:${transaction.amount} Balance:${transaction.balance}`)
        }
    }
}

const person = new BankAccount("Kemi Olusanni");
console.log(person);

person.deposit(50)
console.log(person.balance)

person.deposit(-75)
console.log(person.balance)

person.withdraw(50)
console.log(person.balance)

person.printTransactions();
console.log(`Final Balance : ${person.balance}`)





