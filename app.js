/* eslint-disable no-mixed-operators, no-use-before-define */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

checkWinner = (board) => {
  console.log('winner')
}

validMove = () => {
  console.log('validMove');
}



startGame = () => {

  const player1 = new Player(document.getElementById('name1'), 'O');
  const player2 = new Player(document.getElementById('name2'), 'X');
  const cells = document.querySelectorAll('.cell');
  document.getElementById('game_table').style.visibility = 'visible';

  turn = (cell, player) => {
    board[cell] = player;
    document.getElementById(cell).innerText = player;
  }

  marker = (e) => {
    cells[e.target.id].innerText = 'X'
  }

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', marker);
  }



}