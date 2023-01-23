## Requirements 

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)

# Deposits, withdrawal.
# Account statement (date, amount, balance) printing.
# Data can be kept in memory (it doesn't need to be stored to a database or anything).

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

class BankAccount

const customerRequest
// asks customer if they would like to withdraw, deposit or print balance

const deposit
// adds to balance
// must take into account today's date

const withdraw
// subtracts from balance
// // must take into account today's date


class = BankStatement

const printStatement
// prints bank statement

const balance
// prints balance


```