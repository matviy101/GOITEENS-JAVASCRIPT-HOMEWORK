const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

const users = [
  { name: "bob", balance: 300 },
  { name: "alice", balance: 400 },
  { name: "james", balance: 500 },
];


console.log(calculateTotalBalance(users)); 


// An array of names of all users who have a friend with the specified name.
const getUsersWithFriend = (users, friendName) => {
  // твій код
};

const users2 = [
    
]

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]