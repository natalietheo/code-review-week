const BankAccount = require('../lib/BankAccount');
describe('BankAccount', () => {
    it('prints current balance', () => {
        accountOne = new BankAccount()
        expect(accountOne.printBalance()).toEqual(0);
    })

    it('a deposit of 100 adds 100 to currentBalance', () => {
        accountOne = new BankAccount()
        accountOne.depositMoney(100)
        expect(accountOne.printBalance()).toEqual(100)
    })
})
