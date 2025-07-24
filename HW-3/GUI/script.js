let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

let email = "syskonatviy2@gmail.com";
let containsAt = email.includes('@');

let length = email.length;
console.log("Contains '@':", containsAt);
console.log("Total characters:", length);

let my = "My";
let name = "name";
let is = "is";
let fullName = my + " " + name + " " + is + " Viktor";
console.log(fullName);

let userName = "Oleksandra";
let payment = 300;

let message = `Дякую, ${userName}! До сплати ${payment} грн`;
alert(message);
