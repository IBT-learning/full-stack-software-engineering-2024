// Challenge 1
class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName
    this.balance = 0
    this.transactions = []
  }

// Challenge 2 and Extra Challenge
  deposit(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      console.log('Invalid deposit amount: not a number')
      this.transactions.push(`Failed Deposit: Invalid amount (${amount})`)
    } 
    else if (amount > 0) {
      this.balance += amount
      this.transactions.push(`Deposited $${amount}`)
    } 
    else if (amount < 0) {
      console.log('Negative deposit detected, processing as a withdrawal.')
      this.withdraw(Math.abs(amount))
    } 
    else {
      console.log('Invalid deposit amount')
      this.transactions.push(`Failed Deposit: Invalid amount (${amount})`)
    }
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      console.log('Invalid withdrawal amount: not a number')
      this.transactions.push(`Failed Withdrawal: Invalid amount (${amount})`)
    } 
    else if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount
        this.transactions.push(`Withdrew $${amount}`)
      } else {
        console.log('Insufficient Funds')
        this.transactions.push(`Failed Withdrawal: Insufficient Funds for $${amount}`)
      }
    } 
    else {
      console.log('Invalid withdrawal amount')
      this.transactions.push(`Failed Withdrawal: Invalid amount (${amount})`)
    }
  }

  printTransactions() {
    console.log(`Transaction History for ${this.ownerName}:`)
    if (this.transactions.length === 0) {
      console.log('No transactions to show.')
    } else {
      this.transactions.forEach((transaction, index) => {
        console.log(`${index + 1}. ${transaction}`)
      })
    }
  }
}

const person = new BankAccount("Hannah Gates")

person.deposit(100)
console.log(`Current Balance: $${person.balance}`)
person.withdraw(50)
console.log(`Current Balance: $${person.balance}`)

person.deposit('fifty')
person.withdraw('twenty')

person.withdraw(100)
person.deposit(-20)

person.printTransactions()