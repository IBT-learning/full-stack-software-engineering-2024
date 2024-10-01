class BankAccount{
    constructor(ownerName, balance){
        this.ownerName=ownerName;
        this.balance=0;
        this.transactions=[];
    }
    deposit(amount){
        if(typeof  amount !=='number'){
            console.log("Enter amount in digits")
            return
        }
        if(amount<0){
            console.log("Negative number detected. Withdrawing!")
           this.withdraw(Math.abs(amount))
        
        }
        this.balance +=amount
        this.transactions.push({ type: 'deposit', amount: amount });
    }

    withdraw(amount){
        if(typeof amount !=='number'){
            console.log("Enter amount in digits")
            return
        }
        if(this.balance<amount){
            console.log("Insufficient Funds")
            return
        }
        this.balance -=amount
        this.transactions.push({ type: 'withdraw', amount: amount });
    }

    printTransactions() {
    console.log("Transaction history:");
    for (let i = 0; i < this.transactions.length; i++) {
        const transaction = this.transactions[i];
        console.log((i + 1) + ". " + transaction.type + ": $" + transaction.amount);
    }
}
 
}

const person = new BankAccount("person")

person.deposit(200)
console.log(`Deposited: $${person.balance}`)

person.withdraw(30)
console.log(`Withdraw balance: $${person.balance}`)

person.printTransactions()

