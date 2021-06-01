// MineSweeper

const gameDesk = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const positionsOfBomb = [
  [0, 1],
  [2, 3],
];

function runMinesWeeper(gameDesk, positionsOfBomb) {
  for (let i = 0; i < positionsOfBomb.length; i++) {
    // pick positions of bombs
    const el = positionsOfBomb[i];

    gameDesk[el[0]][el[1]] = "X";
  }

  function getRandomInt(max) {
    // generate random click
    return Math.floor(Math.random() * max);
  }

  let x = getRandomInt(4);
  let y = getRandomInt(4);

  if (gameDesk[x][y] === "X") {
    return "GAME OVER";
  }
}

runMinesWeeper(gameDesk, positionsOfBomb);
