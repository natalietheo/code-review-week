const credits = [];
const debits = [];
class BankAccount {
    constructor() {
        this.currentBalance = 0; 
    }
    depositMoney(number) {     
        credits.push(number);
    } 

    debitMoney(number) {
        debits.push(number);
    }

    printBalance() {
        this.currentBalance = credits - debits
        return this.currentBalance
    }
}
module.exports = BankAccount
