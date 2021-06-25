//- Write a function which remove users with language equals to 'ru'.

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

function filterUsers(user) {
  return user.filter((u) => u.lang !== "ru");
}

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]
