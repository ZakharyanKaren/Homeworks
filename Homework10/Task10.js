// Write a function which filters object by field.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(allUsers, ourStr) {
  return allUsers.filter((user) => user.isAstronaut);
}

console.log(filterByField(users, "isAstronaut")); // [{ username: "Yuri Gagarin",
// lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"}]
