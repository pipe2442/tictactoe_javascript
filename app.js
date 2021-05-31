/* eslint-disable no-mixed-operators, no-use-before-define */

let turnNumber = 0;
let board;

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

function turn(cell, player) {
  board[cell] = player;
  document.getElementById(cell).innerText = player;
}

function checkWinner(board) {
  if (board[0] === board[1] && board[1] === board[2]
          || board[0] === board[3] && board[3] === board[6]
          || board[0] === board[4] && board[4] === board[8]) {
    document.getElementById('win').innerHTML = `<h1>${board[0]} is the winner!!!</h1>`;
    
  } else if (board[3] === board[4] && board[4] === board[5]) {
    document.getElementById('win').innerHTML = `<h1>${board[3]} is the winner!!!</h1>`;
    
  } else if (board[6] === board[7] && board[7] === board[8]) {
    document.getElementById('win').innerHTML = `<h1>${board[6]} is the winner!!!</h1>`;
    
  } else if (board[2] === board[5] && board[5] === board[8]
          || board[2] === board[4] && board[4] === board[6]) {
    document.getElementById('win').innerHTML = `<h1>${board[2]} is the winner!!!</h1>`;
    
  } else if (board[1] === board[4] && board[4] === board[7]) {
    document.getElementById('win').innerHTML = `<h1>${board[1]} is the winner!!!</h1>`;
    
  } else if (turnNumber === 9) {
    document.getElementById('win').innerHTML = '<h1>IT\'S A TIE!!!!</h1>';
    
  }
}

startGame = () => {
  const cells = document.querySelectorAll('.cell');
  document.getElementById('game_table').style.visibility = 'visible';
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', gameLoop);
  }
  turnNumber = 0;
  document.getElementById('win').innerHTML = '';
}

function gameLoop(e) {
  const player1 = new Player('pedro', 'O');
  const player2 = new Player('juan', 'X');

  const game = true;
  while (game) {
    if (turnNumber % 2 === 0) {
      if (board[e.target.id] === player1.marker || board[e.target.id] === player2.marker) {
        document.getElementById('win').innerHTML = '<h1>That\'s not a valid move!!!</h1>';
        turnNumber -= 1;
      } else {
        turn(e.target.id, player1.marker);
      }
    } else if (turnNumber % 2 !== 0) {
      if (board[e.target.id] === player1.marker || board[e.target.id] === player2.marker) {
        document.getElementById('win').innerHTML = '<h1>That\'s not a valid move!!!</h1>';
        turnNumber -= 1;
      } else {
        turn(e.target.id, player2.marker);
      }
    }
    turnNumber += 1;
    checkWinner(board);
    break;
  }
}


