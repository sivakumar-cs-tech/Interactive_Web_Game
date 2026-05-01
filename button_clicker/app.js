// script.js
let score = 0;
let timeLeft = 10;
let isGameActive = false;
const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('timeLeft');
const restartButton = document.getElementById('restartButton');

function startGame() {
    score = 0;
    timeLeft = 10;
    isGameActive = true;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    clickButton.disabled = false;
    const timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isGameActive = false;
            clickButton.disabled = true;
            alert(`Game Over! Your final score is ${score}.`);
        }
    }, 1000);
}

function handleClick() {
    if (isGameActive) {
        score++;
        scoreDisplay.textContent = score;
    }
}

clickButton.addEventListener('click', handleClick);
restartButton.addEventListener('click', startGame);

// Initialize the game when the page loads
startGame();
