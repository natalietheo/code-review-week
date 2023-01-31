const BankAccount = require('../lib/BankAccount');
describe('BankAccount', () => {
    it('prints current balance', () => {
        accountOne = new BankAccount()
        expect(accountOne.printBalance()).toEqual(0);
    })

    it('adds 100 to currentBalance', () => {
        accountOne = new BankAccount()
        accountOne.depositMoney(100)
        expect(accountOne.printBalance()).toBe(100)
    })
    it('subtracts 50 from currentBalance', () => {
        accountOne = new BankAccount()
        accountOne.depositMoney(100)
        accountOne.debitMoney(50)
        expect(accountOne.printBalance()).toBe(50)
    })

})
