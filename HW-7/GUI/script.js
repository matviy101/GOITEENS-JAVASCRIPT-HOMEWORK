let numbers = [2, 4, 6];
numbers[1] = 10;
console.log(numbers);

let lines = ["First line", "Second line", "Third line"];
lines.push("Fourth line");
console.log(lines);

let fiveNumbers = [1, 3, 5, 7, 9];
console.log("Five numbers:");
for (let i = 0; i < fiveNumbers.length; i++) {
  console.log(fiveNumbers[i]);
}

let fiveLines = ["one", "two", "three", "four", "five"];
console.log("Lines with more than 5 characters:");
for (let i = 0; i < fiveLines.length; i++) {
  if (fiveLines[i].length > 5) {
    console.log(fiveLines[i]);
  }
}

let tenNumbers = [3, 17, 8, 29, 4, 15, 23, 1, 11, 6];
let maxVal = Math.max(...tenNumbers);
console.log("Maximum value:", maxVal);

console.log("Even numbers:");
for (let i = 0; i < tenNumbers.length; i++) {
  if (tenNumbers[i] % 2 === 0) {
    console.log(tenNumbers[i]);
  }
}
