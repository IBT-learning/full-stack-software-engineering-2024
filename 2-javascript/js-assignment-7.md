# JavaScript Assignment #7: Classes

You will complete all of these challenges in the same file.

## Challenge #1: Create a class

- Create a new class `BankAccount` with attributes `ownerName` and `balance`
  - `ownerName` should be passed in to the constructor
  - `balance` should be initialized as `0`
- Create a new instance of the class for an imaginary person, `person`

## Challenge #2: Create class methods

- Create a method `deposit` that takes one argument, `amount`. The method should increase the balance by that amount.
- Call `person.deposit(100)` and then console log `person.balance`. It should say 100.
- Now do the same, with a `withdaw` method that reduces the balance.

  - Don't let people overdraft! Have the `withdraw` method first check the balance, and if there isn't enough money, cancel the transaction and print a message that says "Insufficient Funds"

#### Extra challenges (optional)

- What happens if you give the deposit and withdraw methods arguments that are not numbers? Can you handle those cases?
- What happens if you pass a negative number to the `deposit` method? Can your method detect that situation, and call `this.withdraw` instead? (Math.abs() might help you here.)
- Can you keep a log of the user's transactions? Try storing this information in whatever way seems appropriate to you.
  - How about a `printTransactions` method that gives the users a nicely formatted list of transations?
