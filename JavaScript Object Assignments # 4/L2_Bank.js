
const account = {
    owner: "Djiegui",
    balance: 100,

    deposit: function (amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount");
        } else {
            this.balance = this.balance + amount;
            console.log("Deposit successful");
        }
    },

    withdraw: function (amount) {
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
        } else if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance = this.balance - amount;
            console.log("Withdrawal successful");
        }
    }
};

account.deposit(50);
account.withdraw(30);
console.log("Balance:", account.balance);

account.deposit(-10);
account.withdraw(500);
