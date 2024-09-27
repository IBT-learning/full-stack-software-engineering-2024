class BankAccount {
    constructor(ownerName) {
        this.ownerName = ownerName;
        this.balance = 0; // Initialize balance as 0
    }

    deposit(amount) {
        this.balance += amount; // Increase the balance by the amount
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient Funds"); // Check for overdraft
        } else {
            this.balance -= amount; // Decrease the balance by the amount
        }
    }
}

// Create an instance for an imaginary person
const person = new BankAccount("Danny U");

// Test the deposit method
person.deposit(100);
console.log(person.balance); 

// Test the withdraw method
person.withdraw(50);
console.log(person.balance); 

// Test insufficient funds
person.withdraw(100); 
console.log(person.balance); 
