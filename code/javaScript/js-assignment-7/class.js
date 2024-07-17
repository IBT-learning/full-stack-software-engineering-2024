// Challenge #1

class BankAccount{
    constructor(ownerName){
        this.ownerName = ownerName
        this.balance = 0
        this.transactions = []
    }
    // Challenge #2
    
    deposit(amount){
        if(typeof amount !== "number"){
           console.log(`Enter a valid amount!`);
        }
        if(amount < 0){
            return this.withdraw
        } else{
            return this.balance += amount
        }
        
    }

    withdraw(amount){
        if(typeof amount !== "number"){
            console.log(`Enter a valid amount!`);
         }
        else if(amount > this.balance){
            console.log(`Insufficient balance!`);
            return this.balance
        } else{
            const balance = this.balance -= amount
            return balance
        }
    }
    // printTransactions(amount){
    //     // if(this.deposit){
    //     this.transactions.push(amount)
    //     // }
    //     return `${amount} was deposited`
    //     // if(this.withdraw){
    //     //     console.log(this.withdraw);
    //     // }
        
        
        
    // }
}
const person = new BankAccount("Olayode Oyinlola")
person.deposit(200)
person.withdraw(50)
console.log(person.balance);
// console.log(person.printTransactions(200));

