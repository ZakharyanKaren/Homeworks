// Your function must use map method

// - Write a function which returns array of usernames.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames(usersArr) {
  return usersArr.map((user) => user.username);
}

function getUsernameLengths(usersArr) {
  return usersArr.map((user) => user.username.length);
}

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
console.log(getUsernameLengths(users)); // [12, 13]
