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

  turn = (cell, player, next) => {
    document.getElementById('win').innerHTML = `<h1>It's ${next.name.value} turn</h1>`;
    cell.innerText = player.marker
  }

  let turnNumber = 0;
  marker = (e) => {
    if (turnNumber % 2 === 0) {
      turn(cells[e.target.id],player2, player1)
    } else if (turnNumber % 2 !== 0) {
      turn(cells[e.target.id],player1, player2)
    }
    turnNumber += 1
    console.log(turnNumber) 
    if(cells[1].innerText === cells[2].innerText){
      alert('SE CUMPLIO!')
      
    }
  }
  
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].innerText = '';
    cells[i].addEventListener('click', marker);
  }
  
}