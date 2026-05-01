// script.js
const headsButton = document.getElementById('headsButton');
const tailsButton = document.getElementById('tailsButton');
const resultMessage = document.querySelector('.result-message');
const restartButton = document.getElementById('restartButton');

function tossCoin() {
    const outcomes = ['heads', 'tails'];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function handleGuess(guess) {
    const result = tossCoin();
    if (guess === result) {
        resultMessage.textContent = `You guessed ${guess}! The coin landed on ${result}. You win!`;
    } else {
        resultMessage.textContent = `You guessed ${guess}! The coin landed on ${result}. You lose!`;
    }
}

headsButton.addEventListener('click', () => handleGuess('heads'));
tailsButton.addEventListener('click', () => handleGuess('tails'));

restartButton.addEventListener('click', () => {
    resultMessage.textContent = '';
});
