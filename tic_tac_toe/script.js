
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.status');
const restartButton = document.querySelector('.restart-button');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusText.innerHTML = currentPlayerTurn();

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !isGameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
    if (isGameActive) {
        setTimeout(handleAIMove, 500); // AI move after a delay
    }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = gameState[winCondition[0]];
        const b = gameState[winCondition[1]];
        const c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.innerHTML = winningMessage();
        isGameActive = false;
        return;
    }

    const roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusText.innerHTML = drawMessage();
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.innerHTML = currentPlayerTurn();
}

function handleAIMove() {
    if (!isGameActive) return;
    const availableCells = gameState
        .map((cell, index) => (cell === '' ? index : null))
        .filter(index => index !== null);
    
    // Try to win or block player
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const [a, b, c] = winCondition;
        const values = [gameState[a], gameState[b], gameState[c]];
        
        if (values.filter(value => value === 'O').length === 2 &&
            values.includes('')) {
            const index = winCondition[values.indexOf('')];
            makeAIMove(index);
            return;
        }
        
        if (values.filter(value => value === 'X').length === 2 &&
            values.includes('')) {
            const index = winCondition[values.indexOf('')];
            makeAIMove(index);
            return;
        }
    }

    // Choose a random move
    const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    makeAIMove(randomIndex);
}

function makeAIMove(index) {
    const cell = cells[index];
    gameState[index] = 'O';
    cell.innerHTML = 'O';
    handleResultValidation();
}

function handleRestartGame() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    statusText.innerHTML = currentPlayerTurn();
    cells.forEach(cell => (cell.innerHTML = ''));
}
