class BankAccount {
    constructor() {
        this.transactions = []
    }

    transaction(amount) {     
        this.transactions.push({
            amount: amount, 
            date: (new Date()),
        });
    } 

    printBalance() {
        let currentBalance = 0
        for (let i = 0; 
            i < this.transactions.length; i += 1) {
        currentBalance += this.transactions[i].amount
    }
        return currentBalance
    }
}
module.exports = BankAccount