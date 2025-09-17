const bankAccount = {
    ownerName: "Matviy",
    accountNumber: 212323,
    balance: 23, 
    deposit: function() {
        let amount = parseFloat(prompt("Enter amount to deposit:")); 
        if (confirm(`Do you want to deposit $${amount}?`)) {
            this.balance += amount;
            alert(`Deposit successful! New balance: $${this.balance}`);
        } else {
            alert("Deposit canceled.");
        }
    },
    withdraw: function() {
        let amount = parseFloat(prompt("Enter amount to withdraw:"));
        if (amount > this.balance) {
            alert("Insufficient funds");
            return;
        }
        if (confirm(`Do you want to withdraw $${amount}?`)) {
            this.balance -= amount;
            alert(`Withdrawal successful! New balance: $${this.balance}`);
        } else {
            alert("Withdrawal canceled.");
        }
    }
};
console.log(bankAccount);
bankAccount.deposit();
bankAccount.withdraw();
const weather = {
    temperature: 28,
    humidity: 23,
    windSpeed: 5,
    checkTemperature: function() {
        let temp = parseFloat(prompt("Enter temperature in Celsius:"));
        if (temp < 0) {
            console.log("Temperature is below 0 degrees Celsius");
            return true;
        } else {
            console.log("Temperature is 0 degrees Celsius or above");
            return false;
        }
    }
};
weather.checkTemperature();
const user = {
    name: "Matt111",
    email: "example@email.com",
    password: "12345yyyy",
    method: function() {
        let email = prompt("Enter your email: ");
  
        let password = prompt("Enter your password: ");
        if (email !== this.email) {
            return alert("Invalid email");
        }
        if (password !== this.password) {
            return alert("invalid password");
        }
        else {
            alert("Credentials valid");
        }
    }
}
user.method()


const movie = {
    title: "film",
    director: "matt",
    year: 2025,
    rating: 10,

    method: function() {
        return this.rating > 8;
    }
}

console.log("Title:", movie.title);
console.log("Director:", movie.director);
console.log("Year:", movie.year);
console.log("Rating:", movie.rating);
console.log("Movie rating above 8", movie.method());
