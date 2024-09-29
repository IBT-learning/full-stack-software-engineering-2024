// JavaScript Assignment #7: Classes

// Challenge #1: Create a class

class BankAccount {
    constructor(ownerName) {
        this.ownerName=ownerName,
        this.balance=0
    }

    // Challenge #2: Create class methods

    transactionDetails=[["Transaction, Amount,  Balance,  Status"]]

    deposit(amount){
        if (typeof amount === "number"){
            if (amount>0){
                this.balance += amount;
                this.transactionDetails.push([`Deposit,  ${amount},  ${this.balance},  Successful`])
            } else{
                this.withdraw(amount)
            }
            
        } else{
            return `The amount argument takes only numbers`
        }
        
    }

    withdraw(amount){
        if (typeof amount === "number"){
            if (amount<0){
                const absoluteAmount=Math.abs(amount)
                if (this.balance>=absoluteAmount){
                    this.balance -= absoluteAmount;
                    this.transactionDetails.push([`Withdraw,  ${absoluteAmount},  ${this.balance},  Successful`])
                } else{
                    this.transactionDetails.push([`Withdraw,  ${absoluteAmount},  ${this.balance},  Failed`])    
                    return 'Insufficient Funds';    
                } 
            }else{
                if (this.balance>=amount){
                    this.balance -= amount;
                    this.transactionDetails.push([`Withdraw,  ${amount} , ${this.balance},  Successful`])
                } else{
                    this.transactionDetails.push([`Withdraw,  ${absoluteAmount},  ${this.balance},  Failed`])  
                    return 'Insufficient Funds';
                    
                } 
                
            }
           
        }else{
            return `The amount argument takes only numbers`
        }
    }

    printTransactions(){
        console.table(this.transactionDetails)
    }

}    

const person = new BankAccount('person');

person.deposit(1000);
person.deposit(-5200);
person.deposit(5000)
person.withdraw(1000)
person.printTransactions()
console.log(person);




