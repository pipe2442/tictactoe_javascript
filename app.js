var game = false;
var turn_number = 0;
const huPlayer = 'o';
const aiPlayer = 'x'
const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    for (var i = 0; i < cells.length; i++){
        cells[i].innerText = ""
        cells[i].addEventListener('click', turnClick);
    }
    turn_number = 0;
}

function turnClick(square){
    game = true;
    while(game) {
        if(turn_number % 2 == 0 ) {
            turn(square.target.id, huPlayer)
        }else {
            turn(square.target.id, aiPlayer)
        }
        turn_number += 1;
        check_winner(board)
        break;
    }  
}

function turn(cell, player) {
    board[cell] = player;
    document.getElementById(cell).innerText = player;
}

function check_winner(board) {
    if(board[0] === board[1] && board[1] === board[2] || 
        board[0] === board[3] && board[3] === board[6] || 
        board[0] === board[4] && board[4] === board[8]) { 
        alert(`${board[0]} is the winner!!!`)
        startGame() 
    }  else if(board[3] === board[4] && board[4] === board[5]) {
        alert(`${board[3]} is the winner!!!`)
        startGame() 
    } else if(board[6] === board[7] && board[7] === board[8]) {
        alert(`${board[6]} is the winner!!!`)
        startGame() 
    } else if(board[2] === board[5] && board[5] === board[8] || 
        board[2] === board[4] && board[4] === board[6]) {
        alert(`${board[2]} is the winner!!!`)
        startGame() 
    } else if(board[1] === board[4] && board[4] === board[7]) {
        alert(`${board[1]} is the winner!!!`)
        startGame() 
    } else if(turn_number === 9){
        alert('IS A TIE!!!')
        startGame() 
    }
}