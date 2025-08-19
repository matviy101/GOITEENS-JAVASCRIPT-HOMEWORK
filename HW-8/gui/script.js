let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

let strings = ["apple", "banana", "cherry"];
strings.push("orange");
console.log(strings);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

let arr5 = [5, 10, 15, 20, 25];
for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}

let strArr = ["cat", "elephant", "sunshine", "dog", "butterfly"];
for (let i = 0; i < strArr.length; i++) {
  if (strArr[i].length > 5) {
    console.log(strArr[i]);
  }
}

let arr10 = [3, 17, 8, 25, 42, 11, 29, 6, 14, 30];
let maxVal = Math.max(...arr10);
console.log(maxVal);

let arrEven = [4, 7, 12, 9, 18, 21, 30, 15, 8, 5];
for (let i = 0; i < arrEven.length; i++) {
  if (arrEven[i] % 2 === 0) {
    console.log(arrEven[i]);
  }
}
