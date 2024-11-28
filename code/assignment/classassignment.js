class BankAccount {
    constructor(ownerName){
        this.ownerName = ownerName;
        this.balance = 0;
    }

    deposit(amount){
        if(typeof amount !== "number"){
            console.log("Invalid input, deposit balance must be in number")
        }else if (amount < 0){
            return this.balance += Math.abs(amount)
        }else{
            return this.balance += amount
        }
    }

    withdraw(withdrawal){
    if(typeof withdrawal !== "number"){
        console.log ("withdrawal amount must be in number")
    }
    else if (withdrawal > this.balance){
         console.log ("Insufficient funds")
     }
      else{
         this.balance -= withdrawal
         console.log (`Your total amount is now ${this.balance}`)
     }
    }
    //extra challenge
    printTransaction(withdrawal, deposited){
        return `Account owner : ${this.ownerName}.\nDeposit: $${Math.abs(deposited)}\nWithdrawal: $${withdrawal}.\nBalance: $${this.balance}`
       
    }
}


const person = new BankAccount("Jane Doe")
console.log(person)

person.deposit(-100)
console.log("$" + person.balance)

person.withdraw(70)
console.log("$" + person.balance)

person.withdraw(120)
console.log("$" + person.balance)

person.deposit("hundred")
console.log("$" + person.balance)

person.withdraw("fifty")
console.log("$" + person.balance)

console.log(person.printTransaction(70, -100))