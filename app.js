/* eslint-disable no-mixed-operators, no-use-before-define */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

reload = () => {
  name1.value = '';
  name2.value = '';
  location.reload();
};

startGame = () => {
  document.getElementById('name1').style.visibility = 'hidden';
  document.getElementById('name2').style.visibility = 'hidden';
  const player1 = new Player(document.getElementById('name1'), 'X');
  const player2 = new Player(document.getElementById('name2'), 'O');
  const cells = document.querySelectorAll('.cell');
  document.getElementById('game_table').style.visibility = 'visible';
  document.getElementById('win').innerHTML = '';

  checkWinner = (board) => {
    console.log('winner');
  };

  turn = (cell, player, next) => {
    if (cell.innerText === player.marker || cell.innerText === next.marker) {
      document.getElementById('win').innerHTML = '<h1>Thats not a valid move</h1>';
      turnNumber -= 1;
    } else {
      document.getElementById('win').innerHTML = `<h1>It's ${next.name.value} turn</h1>`;
      cell.innerText = player.marker;
    }
  };

  let turnNumber = 0;
  marker = (e) => {
    if (turnNumber % 2 === 0) {
      turn(cells[e.target.id], player2, player1);
    } else if (turnNumber % 2 !== 0) {
      turn(cells[e.target.id], player1, player2);
    }
    turnNumber += 1;
    console.log(turnNumber);
  };

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', marker);
  }
  document.getElementById('win').innerHTML = `<h1>It's ${player2.name.value} turn</h1>`;
};