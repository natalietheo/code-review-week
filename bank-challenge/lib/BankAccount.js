class BankAccount {
    constructor() {
        this.currentBalance = 0;        
    }

    printBalance() {
        return this.currentBalance;
    }
        
    depositMoney(number) { 
    if (number > 0) {
        this.currentBalance += number;
    }
    else {
        throw new Error("Amount must be larger than 0");
    } 
    
    

}

    
}

module.exports = BankAccount
