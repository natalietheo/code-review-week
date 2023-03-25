const BankAccount = require('../lib/BankAccount');
describe('BankAccount', () => {
    it('account starts off with a balance of 0', () => {
        const account = new BankAccount()
        expect(account.printBalance()).toEqual(0);
    })

    it('adds 100 to currentBalance', () => {
        const account = new BankAccount()
        account.transaction(100)
        expect(account.printBalance()).toBe(100)
    })

    it('subtracts 50 from currentBalance', () => {
        const account = new BankAccount()
        account.transaction(-50)
        expect(account.printBalance()).toBe(-50)
    })

})
