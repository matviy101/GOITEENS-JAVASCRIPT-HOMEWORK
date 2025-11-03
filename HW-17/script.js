// Task 1
const calculateTotalBalance = users =>
  users.reduce((total, { balance }) => total + balance, 0);

// Task 2
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

// Task 3
const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);

// Task 4
const getSortedUniqueSkills = users =>
  [...new Set(users.flatMap(({ skills }) => skills))].sort();
