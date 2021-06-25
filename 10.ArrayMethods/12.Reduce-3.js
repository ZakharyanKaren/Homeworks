// Write a function which calculates average age of users.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(allUsers) {
  let count = 0;
  let sumOfUsersAge = allUsers.reduce(function (acc, curr) {
    count++;
    return acc + curr.age;
  }, 0);

  let averageAge = sumOfUsersAge / count;

  return averageAge;
}

console.log(getAverageAge(users)); // 55
