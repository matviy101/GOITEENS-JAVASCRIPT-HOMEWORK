function logItems (array) {
    for (let i = 0; i < array.length; i ++) {
        console.log((i + 1) + " - " + array [i]);
    }
}

const fruits = ['Mango', 'Poly', 'Ajax'];
logItems(fruits);

function calculateEngravingPrice(message, pricePerWord) {

  const words = message.split(" ");
  
  const numberOfWords = words.length;
  
  const totalPrice = numberOfWords * pricePerWord;
  
  return totalPrice;
}

console.log(calculateEngravingPrice("Happy Birthday", 10));
console.log(calculateEngravingPrice("Love You Forever", 5));

function findLongestWord(string) {
  const words = string.split(" ");
  
  let longestWord = words[0];
  
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("JavaScript is awesome")); 

function formatString(string) {
  if (string.length <= 40) {
    return string; 
  } else {
    return string.slice(0, 40) + '...'; 
  }
}

console.log(formatString("Short string")); 

console.log(formatString("This is a very long string that needs to be truncated for display purposes")); 

function checkForSpam(message) {

  const lowerCaseMessage = message.toLowerCase();
  
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true; 
  }
  
  return false; 
}

console.log(checkForSpam("Get our sale now!")); 
console.log(checkForSpam("This is a normal message")); 
console.log(checkForSpam("Beware of spam emails")); 

const numbers = [];
let input;

do {
  input = prompt("Enter a number:");
  if (input === null) break;
  const number = Number(input);
  if (isNaN(number)) {
    alert("Incorrect number entered, try again");
    continue;
  }
  numbers.push(number);
} while (true);

if (numbers.length > 0) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  console.log(`Total sum of numbers is ${total}`);
} else {
  console.log("No numbers were entered");
}

const logins = ['user1', 'admin', 'guest'];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Error! Login must be between 4 and 16 characters';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Such a login is already in use!';
  }
  allLogins.push(login);
  return 'Login successfully added!';
}

console.log(addLogin(logins, 'newUser')); 
console.log(addLogin(logins, 'admin'));   
console.log(addLogin(logins, 'abc'));     
console.log(logins);                       

