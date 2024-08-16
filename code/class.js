class BankAccount {
    constructor(ownerName, balance) {
      this.name = ownerName;
      this.balance = 0;
    }
    deposit(amount) {
      if (isNaN(amount)) {
        console.error("Deposit amount must be a number");
      } else if (amount > 0) {
        this.balance += amount;
      } else {
        this.withdraw(Maths.abs(amount))
      }
    }
  
    withdraw(amount) {
      if (isNaN(amount)) {
        console.error("Withdraw amount must be a number");
      } else if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.error("Insufficient Funds");
      }
    }
  }
  
  const person = new BankAccount("Mark Tyson", 250);
  console.log(person);
  
  person.deposit( 100);
  console.log(person.balance);
  
  