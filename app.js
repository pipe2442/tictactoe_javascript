var oriBoard;
var game = false;
var turn_number = 0;
const huPlayer = 'o';
const aiPlayer = 'x'
var huPlayer_moves  = []
var aiPlayer_moves  = []

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    for (var i = 0; i < cells.length; i++){
        cells[i].innerText = ""
        cells[i].addEventListener('click', turnClick);
    }
}

function turnClick(square){
    game = true;
    while(game) {
        if(turn_number % 2 == 0 ) {
            turn(square.target.id, huPlayer)
            huPlayer_moves.push(square.target.id)
            console.log(huPlayer_moves);
        }else {
            turn(square.target.id, aiPlayer)
            aiPlayer_moves.push(square.target.id)
        }
        turn_number += 1;
        check_winner(origBoard)
        console.log(turn_number)
        break;
    }  
}



function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}

function check_winner(board) {
    if(board[0] === board[1] && board[1] === board[2]) { 
        alert('we have a winner') 
    } else if(board[0] === board[3] && board[3] === board[6]) {
        alert('we have a winner') 
    } else if(board[0] === board[4] && board[4] === board[8]) {
        alert('we have a winner') 
    } else if(board[3] === board[4] && board[4] === board[5]) {
        alert('we have a winner') 
    } else if(board[6] === board[7] && board[7] === board[8]) {
        alert('we have a winner') 
    } else if(board[2] === board[5] && board[5] === board[8]) {
        alert('we have a winner') 
    } else if(board[2] === board[4] && board[4] === board[6]) {
        alert('we have a winner') 
    }
}