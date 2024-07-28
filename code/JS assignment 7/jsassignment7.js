
class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (typeof amount === 'number' && !isNaN(amount)) {
            if (amount >= 0) {
                this.balance += amount;
                this.transactions.push({ type: 'Deposit', amount: amount, balance: this.balance });
            } else {
                console.log('Deposit amount must be positive.');
            }
        } else {
            console.log('Invalid deposit amount. Please enter a valid number.');
        }
    }

    withdraw(amount) {
        if (typeof amount === 'number' && !isNaN(amount)) {
            if (amount <= this.balance) {
                this.balance -= amount;
                this.transactions.push({ type: 'Withdrawal', amount: amount, balance: this.balance });
            } else {
                console.log('Insufficient Funds');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a valid number.');
        }
    }
    printTransactions(){
        console.log(this.transactions);
    }
}

const personAccount = new BankAccount("person");
personAccount.deposit(100);
console.log(personAccount.balance);
personAccount.withdraw(50);
personAccount.deposit('abc');
console.log(personAccount.balance);
personAccount.withdraw(75);
personAccount.printTransactions();
