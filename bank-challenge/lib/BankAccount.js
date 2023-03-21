class BankAccount {
    constructor() {
        this.currentBalance = 0; 
        this.sumOfCredits = 0;
        this.sumOfDebits = 0;
        this.credits = []
        this.debits = []
    }

    // pushes deposit amount into array of credits

    depositMoney(creditAmount) {     
        this.credits.push(creditAmount);
    } 

    // pushes debit amount into array of debits

    debitMoney(debitAmount) {
        this.debits.push(debitAmount);
    }

    // gets totals for credits array and debits array

    totalCredits() {
       for (let i = 0; 
        i < this.credits.length; 
        i += 1) {
        this.sumOfCredits += this.credits[i]
    }
    return this.sumOfCredits
}

    totalDebits() {
        console.log("this is debits" + debits);
        for (let i = 0; 
            i < this.debits.length; i += 1) {
        this.sumOfDebits += this.debits[i]
    }
        return this.sumOfDebits
    }

    calculateBalance() {
        this.currentBalance = this.sumOfCredits - this.sumOfDebits
    }

    printBalance() {
        return this.currentBalance
    }
}
module.exports = BankAccount