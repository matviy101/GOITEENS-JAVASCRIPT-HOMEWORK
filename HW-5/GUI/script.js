let drink = "Tea"; // Change this to Coffee, Tea or Juice

switch (drink) {
  case "Coffee":
    console.log("You selected Coffee.");
    break;
  case "Tea":
    console.log("You selected Tea.");
    break;
  case "Juice":
    console.log("You selected Juice.");
    break;
  default:
    console.log("Unknown drink.");
}





let day = "Sunday"; 

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(day + " is a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log(day + " is a weekend.");
    break;
  default:
    console.log("Invalid day entered.");
}





let month = 4; 

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("It's winter.");
    break;
  case 3:
  case 4:
  case 5:
    console.log("It's spring.");
    break;
  case 6:
  case 7:
  case 8:
    console.log("It's summer.");
    break;
  case 9:
  case 10:
  case 11:
    console.log("It's autumn.");
    break;
  default:
    console.log("Invalid month number.");
}




let color = "yellow"; // type red, green, or yellow

switch (color.toLowerCase()) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Wait");
    break;
  default:
    console.log("Unknown color.");
}





let num1 = 10;
let num2 = 1;
let operator = "+"; // you can only work with these operators +, -, *, /

switch (operator) {
  case "+":
    console.log("Result:", num1 + num2);
    break;
  case "-":
    console.log("Result:", num1 - num2);
    break;
  case "*":
    console.log("Result:", num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero.");
    } else {
      console.log("Result:", num1 / num2);
    }
    break;
  default:
    console.log("Invalid operator.");
}
