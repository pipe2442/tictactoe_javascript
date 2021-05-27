let game = false;
let turn_number = 0;
const oPlayer = 'o';
const xPlayer = 'x';
const cells = document.querySelectorAll('.cell');

function startGame() {
  document.getElementById('game_table').style.visibility = 'visible';
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', gameLoop);
  }
  turn_number = 0;
}

function gameLoop(e) {
  game = true;
  while (game) {
    if (turn_number % 2 == 0) {
      if (board[e.target.id] == oPlayer || board[e.target.id] == xPlayer) {
        alert('thats not a valid move');
        turn_number -= 1;
      } else {
        turn(e.target.id, oPlayer);
      }
    } else if (turn_number % 2 != 0) {
      if (board[e.target.id] == oPlayer || board[e.target.id] == xPlayer) {
        alert('thats not a valid move');
        turn_number -= 1;
      } else {
        turn(e.target.id, xPlayer);
      }
    }
    turn_number += 1;
    console.log(turn_number);
    check_winner(board);
    break;
  }
}

function turn(cell, player) {
  board[cell] = player;
  document.getElementById(cell).innerText = player;
}

function check_winner(board) {
  if (board[0] === board[1] && board[1] === board[2]
        || board[0] === board[3] && board[3] === board[6]
        || board[0] === board[4] && board[4] === board[8]) {
    alert(`${board[0]} is the winner!!!`);
    startGame();
  } else if (board[3] === board[4] && board[4] === board[5]) {
    alert(`${board[3]} is the winner!!!`);
    startGame();
  } else if (board[6] === board[7] && board[7] === board[8]) {
    alert(`${board[6]} is the winner!!!`);
    startGame();
  } else if (board[2] === board[5] && board[5] === board[8]
        || board[2] === board[4] && board[4] === board[6]) {
    alert(`${board[2]} is the winner!!!`);
    startGame();
  } else if (board[1] === board[4] && board[4] === board[7]) {
    alert(`${board[1]} is the winner!!!`);
    startGame();
  } else if (turn_number === 9) {
    alert('IS A TIE!!!');
    startGame();
  }
}