/* eslint-disable no-mixed-operators, no-use-before-define, no-undef, no-restricted-globals */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

reload = () => {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
  location.reload();
};

startGame = () => {
  document.getElementById('name1').style.visibility = 'hidden';
  document.getElementById('name2').style.visibility = 'hidden';
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('replay').style.visibility = 'visible';
  const player1 = new Player(document.getElementById('name1'), 'X');
  const player2 = new Player(document.getElementById('name2'), 'O');
  const cells = document.querySelectorAll('.cell');
  document.getElementById('game_table').style.visibility = 'visible';
  document.getElementById('win').innerHTML = '';

  checkWinner = (board, player1, player2) => {
    const a = player1.marker;
    const b = player2.marker;
    if ((a === board[0].innerText || b === board[0].innerText)
    && board[0].innerText === board[1].innerText && board[0].innerText === board[2].innerText
    || (a === board[3].innerText || b === board[3].innerText)
    && board[3].innerText === board[4].innerText && board[3].innerText === board[5].innerText
    || (a === board[6].innerText || b === board[6].innerText)
    && board[6].innerText === board[7].innerText && board[6].innerText === board[8].innerText
    || (a === board[0].innerText || b === board[0].innerText)
    && board[0].innerText === board[3].innerText && board[0].innerText === board[6].innerText
    || (a === board[1].innerText || b === board[1].innerText)
    && board[1].innerText === board[4].innerText && board[1].innerText === board[7].innerText
    || (a === board[2].innerText || b === board[2].innerText)
    && board[2].innerText === board[5].innerText && board[2].innerText === board[8].innerText
    || (a === board[0].innerText || b === board[0].innerText)
    && board[0].innerText === board[4].innerText && board[0].innerText === board[8].innerText
    || (a === board[2].innerText || b === board[2].innerText)
    && board[2].innerText === board[4].innerText && board[2].innerText === board[6].innerText) {
      if (turnNumber % 2 === 0) {
        document.getElementById('win').innerHTML = `<h1>${player2.name.value} wins</h1>`;
      } else {
        document.getElementById('win').innerHTML = `<h1>${player1.name.value} wins</h1>`;
      }
      document.getElementById('game_table').style.visibility = 'hidden';
      document.getElementById('win').style.margin = '-30rem 0 0 0';
    }
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
    } else {
      turn(cells[e.target.id], player1, player2);
    }
    checkWinner(cells, player1, player2);
    turnNumber += 1;
    if (turnNumber > 8) {
      document.getElementById('win').innerHTML = '<h1>It\'s a tie!!!</h1>';
      document.getElementById('game_table').style.visibility = 'hidden';
      document.getElementById('win').style.margin = '-30rem 0 0 0';
    }
  };

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', marker);
  }
  document.getElementById('win').innerHTML = `<h1>It's ${player2.name.value} turn</h1>`;
};