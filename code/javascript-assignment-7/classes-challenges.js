// create a class
class BankAccount {
    constructor (ownerName, balance) {
         this.ownerName = ownerName;
         this.balance = 0;
   
    
}
//create a class method
// i) a deposit method
 deposit(amount) {
    this.balance += amount;

 }
 //ii)a withdraw method
 withdraw(amount) {
   if (amount > this.balance) {
        console.log("Insufficient balance");
   } else {
         this.balance -= amount
   }
 }
}
const person = new BankAccount("Stacy")

person.deposit(100);
console.log(person.balance);

person.withdraw(300);
console.log(person.balance);
