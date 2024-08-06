// challenge 1
class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName
        this.balance = 0
        this.transDetails = []
        this.dateFormat = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,

        } 

    }

    deposit(amount) {

        if (typeof amount === "number" && !isNaN(amount) && isFinite(amount)) {
            if (amount > 0) {
                this.balance += amount
                const transDate = new Date()
                this.transDetails.push({type: 'Deposit',
                                accountName: `Receiver: ${this.ownerName}`,
                                deposit: `Amount Deposited: ${amount}`,
                                balance: `New Balance: ${this.balance}`,
                                date: `Date: ${transDate.toLocaleString('en-US', this.dateFormat)}`
                    })
                    
            } else {
                this.withdraw(Math.abs(amount)) 
            }
        } else {
            console.log("Input a valid number");
        }
    }

    withdraw(amount) {
        if (typeof amount === "number" && !isNaN(amount) && isFinite(amount)) {
            if (amount <= this.balance) {
                this.balance -= amount
                const transDate = new Date()
                this.transDetails.push({type: 'Withdrawal',
                                accountName: `Account Name: ${this.ownerName}`,
                                withdraw: `Amount Withdrawn: ${amount}`,
                                balance: `New Balance: ${this.balance}`,
                                date: `Date: ${transDate.toLocaleString('en-US', this.dateFormat)}`
                    })
            } else {
                    console.log("Insufficient Funds");
            }
         } else {
            console.log("Input a valid number");
         }
    }

    printTransactions() {

        if (this.transDetails.length === 0) {
            console.log("No transactions to display.");
            return;
        }
        for (const trans of this.transDetails) {
            
            console.log(`${trans.type} - ${trans.accountName} - ${trans.deposit || trans.withdraw} - ${trans.balance} - ${trans.date}`);
        }
    }
}

const person = new BankAccount("Adam")
person.deposit(200)
person.deposit(100)
person.withdraw(50)
person.printTransactions()