console.log("Challenge #1: Create a class");
//Create a new class BankAccount with attributes ownerName and balance
// ownerName should be passed in to the constructor
// balance should be initialized as 0
// Create a new instance of the class for an imaginary person, person

class BankAccount{
    constructor(ownerName){
    this.ownerName = ownerName;
    this.balance = 0;
    this.transactionsLogs = [];
    }

    //Create a method deposit that takes one argument, amount. The method should increase the balance by that amount.
    deposit(amount) {
        // What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
        if (typeof amount !== 'number') {
            console.log("You have entered an invalid input, please try again.");
            return;
        }
        if (amount > 0){
         this.balance += amount;
         this.transactionsLogs.push({ typeOfTransaction: 'deposit', amount, date: new Date().toLocaleDateString() });

        console.log(`An amount of GHS ${this.balance}.00 has been deposited to your account. Your current balance is GHS ${this.balance}.00`);
            }

        // What happens if you pass a negative number to the deposit method? Can your method detect that situation, and call this.withdraw instead? (Math.abs() might help you here.)
        else if(amount < 0){
             return this.withdraw(Math.abs(amount));
             
    }

     else{
        console.log("You have entered an invalid input, please try again.");
    }
    }


    // Now do the same, with a withdaw method that reduces the balance.
    // Don't let people overdraft! Have the withdraw method first check the balance, 
    //and if there isn't enough money, cancel the transaction and print a message that says "Insufficient Funds"
    withdraw(amount){
        // What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
        if (typeof amount !== 'number') {
            console.log("You have entered an invalid input, please try again.");
            return;
        }
            if (amount > 0 && amount <= this.balance){
                this.balance -= amount;
                this.transactionsLogs.push({ typeOfTransaction: 'withdraw', amount, date: new Date().toLocaleDateString() });
                
                console.log(`An amount of GHS ${amount}.00 has been debited from your account. Your current balance is GHS ${this.balance}.00`);
                }

        else if (amount > 0 && amount > this.balance){
                console.log(`Insufficient Funds.`);
                }
        
        // What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
        else{
            console.log("You have entered an invalid input, please try again.");
        } 

        }

    // Can you keep a log of the user's transactions? Try storing this information in whatever way seems appropriate to you.
    // How about a printTransactions method that gives the users a nicely formatted list of transations?
    printTransactions() {
        console.log(`Dear ${this.ownerName}, please find below your transaction history:`);
        for (let i = 0; i < this.transactionsLogs.length; i++) {
            const log = this.transactionsLogs[i];
            console.log(`${i + 1}. ${log.date} - ${log.typeOfTransaction} of GHS ${log.amount}.00`);
        }
    }
    
}

const person = new BankAccount("Mr Anthony");

console.log(" ");

console.log('Challenge #2: Create class methods');
// Create a method deposit that takes one argument, amount. The method should increase the balance by that amount.
// Call person.deposit(100) and then console log person.balance. It should say 100.
// Now do the same, with a withdaw method that reduces the balance.
// Don't let people overdraft! Have the withdraw method first check the balance, 
//and if there isn't enough money, cancel the transaction and print a message that says "Insufficient Funds"


//Call person.deposit(100) and then console log person.balance. It should say 100.;
person.deposit(100);
person.deposit(30)

person.deposit(-4);

person.withdraw(50);
person.withdraw(79)


console.log(" ");
console.log("Extra challenges");

person.printTransactions();
















