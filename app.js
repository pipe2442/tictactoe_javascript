var oriBoard;
const huPlayer = 'o';
const aiPlayer = 'x'
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelectorAll(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys()) // create array 1 to 0
}