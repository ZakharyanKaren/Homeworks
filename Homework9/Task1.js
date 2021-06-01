let size = 9;

function runTicTacToe(size) {
  let player1 = "X";
  let player2 = "O";
  let winner = "";
  let player1Turn = true;
  let x = getRandomInt(3);
  let y = getRandomInt(3);
  let winnerIsReady = false;

  const readyDesk = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  let comboForWin = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < size; i++) {
    if (winnerIsReady) {
      break;
    }

    while (readyDesk[x][y] !== 0) {
      x = getRandomInt(3);
      y = getRandomInt(3);
    }

    if (player1Turn) {
      player1Turn = !player1Turn;
      readyDesk[x][y] = player1;
    } else {
      readyDesk[x][y] = player2;
      player1Turn = !player1Turn;
    }

    for (let j = 0; j < comboForWin.length; j++) {
      let element = comboForWin[j];

      if (
        readyDesk[element[0][0]][element[0][1]] === player1 &&
        readyDesk[element[1][0]][element[1][1]] === player1 &&
        readyDesk[element[2][0]][element[2][1]] === player1
      ) {
        winnerIsReady = !winnerIsReady;
        winner = "Player 1! won";
        break;
      } else if (
        readyDesk[element[0][0]][element[0][1]] === player2 &&
        readyDesk[element[1][0]][element[1][1]] === player2 &&
        readyDesk[element[2][0]][element[2][1]] === player2
      ) {
        winnerIsReady = !winnerIsReady;
        winner = "Player 2! won";
        break;
      } else if (i === 8 && j === 7) {
        winnerIsReady = !winnerIsReady;
        winner = "Draw";
        break;
      }
    }
  }
  console.log(readyDesk);
  return winner;
}

console.log(runTicTacToe(size));
