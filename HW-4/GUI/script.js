 let field1 = "Hello";  
 let field2 = "World";
 
 if (field1 !== "" && field2 !== "") {
   console.log("Both fields are filled");
 } else {
   console.log("Not all fields are filled");
 }
 let num1 = 6;
 let num2 = 6;
 let sum = num1 + num2;
 
 if (sum > 10) {
   console.log("Sum is greater than 10");
 } else {
   console.log("Sum is less than 10");
 }
 let text = "I am learning JavaScript now";
 
 if (text.includes("JavaScript")) {
  console.log("Text contains the word JavaScript");
 } else {
   console.log("Text does not contain the word JavaScript");
 }


let number = 15;

if (number > 10 && number < 20) {
  console.log("Number is in the range 10 to 20");
} else {
  console.log("Number is not in the range 10 to 20");
}


let name = "Matviy";
let email = "matt@gmail.com";
let password = "aanjdbhsbhsvbdws";

let isNameValid = name.length >= 3;
let isEmailValid = email.includes("@") && email.includes(".");
let isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
    console.log("👍");
} else {
    console.log("Error");
}

