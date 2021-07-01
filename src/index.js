/* eslint-disable no-undef */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

reload = () => {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
  window.location.reload();
};

validateForm = () => {
  const a = document.getElementById('name1');
  const b = document.getElementById('name2');
  if (a.value === '' || b.value === '') {
    document.getElementById('validate').innerHTML = '<h1>Player names can not be blank</h1>';
    startGame.preventDefault();
  }
};

const hiddeTable = () => {
  document.getElementById('game_table').style.visibility = 'hidden';
}

startGame = () => {
  validateForm();
  document.getElementById('name1').style.visibility = 'hidden';
  document.getElementById('name2').style.visibility = 'hidden';
  document.getElementById('start').style.visibility = 'hidden';
  document.getElementById('replay').style.visibility = 'visible';
  document.getElementById('validate').innerHTML = '';
  const player1 = new Player(document.getElementById('name1'), 'X');
  const player2 = new Player(document.getElementById('name2'), 'O');
  const cells = document.querySelectorAll('.cell');
  document.getElementById('game_table').style.visibility = 'visible';
  document.getElementById('win').innerHTML = '';
  let turnNumber = 0;

  checkWinner = (board, player1, player2) => {
    const a = player1.marker;
    const b = player2.marker;

    notEmpty = (spot, a, b) => {
      if (a === board[spot].innerText || b === board[spot].innerText) {
        return true;
      }
      return false;
    };

    checkWin = (a, b, c, p1, p2) => {
      if (notEmpty(a, p1, p2) && board[a].innerText === board[b].innerText
      && board[a].innerText === board[c].innerText) {
        return true;
      }
      return false;
    };

    if (checkWin(0, 1, 2, a, b) || checkWin(3, 4, 5, a, b) || checkWin(6, 7, 8, a, b)
    || checkWin(0, 3, 6, a, b) || checkWin(1, 4, 7, a, b) || checkWin(2, 5, 8, a, b)
    || checkWin(0, 4, 8, a, b) || checkWin(2, 4, 6, a, b)) {
      if (turnNumber % 2 === 0) {
        document.getElementById('win').innerHTML = `<h1>${player2.name.value} wins</h1>`;
      } else {
        document.getElementById('win').innerHTML = `<h1>${player1.name.value} wins</h1>`;
      }
      hiddeTable();
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
      hiddeTable();
      document.getElementById('win').style.margin = '-30rem 0 0 0';
    }
  };

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', marker);
  }
  document.getElementById('win').innerHTML = `<h1>It's ${player2.name.value} turn</h1>`;
};

module.exports = { Player, startGame, reload, validateForm, hiddeTable, startGame }