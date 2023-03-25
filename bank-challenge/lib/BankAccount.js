class BankAccount {
    constructor() {
        this.transactions = []
    }

    debit(amount) {
        this.credit(0-amount);
    }

    credit(amount) {     
        this.transactions.push({
            amount: amount, 
            date: (new Date()),
        });
    } 

    printBalance() {
        let currentBalance = 0
        for (let i = 0; 
            i < this.transactions.length; i += 1) {
                transaction = this.transactions[i];
        currentBalance += transaction.amount
    }
        return currentBalance
    }
}
module.exports = BankAccount