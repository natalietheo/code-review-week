## BANK TECH CHALLENGE 

## User stories
As a bank user, so that I can keep track of my money, I would like to be able to view my bank statement

As a bank user, so that I can keep track of my money, I would like to see my balance when I deposit or withdraw money from my account.

## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

##
```javascript
class BankAccount {
    depositMoney() 
    // takes number and adds to credits array
    credits = []
    returnCredits
    // returns credits array
// must take into account today's date

    debitMoney() 
    // takes number and adds to withdrawals array
    debits = []
    returnDebits
    // return debits array

accountBalance { 
    currentBalance = credits - debits
    // takes credits array and debits array, subtracts debits from credits to get a current balance
}

class BankStatement {
    printStatement 
    // prints bank statement (including dates)
}

```