
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const paddleWidth = 10;
const paddleHeight = 100;
const ballRadius = 10;

let upPressed = false;
let downPressed = false;
let isPaused = false;

const player = {
    x: 10,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 6,
    score: 0
};

const computer = {
    x: canvas.width - paddleWidth - 10,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    dy: 4,
    score: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: ballRadius,
    speed: 4,
    dx: 4,
    dy: -4
};

function drawPaddle(x, y, width, height) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, width, height);
}

function drawBall(x, y, radius) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = "32px sans-serif";
    ctx.fillText(`Player: ${player.score}`, 20, 40);
    ctx.fillText(`Computer: ${computer.score}`, canvas.width - 180, 40);
}

function movePaddle() {
    if (upPressed && player.y > 0) {
        player.y -= player.dy;
    } else if (downPressed && player.y < canvas.height - player.height) {
        player.y += player.dy;
    }
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top and bottom walls
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    // Ball collision with paddles
    if (
        ball.x - ball.radius < player.x + player.width &&
        ball.y > player.y &&
        ball.y < player.y + player.height
    ) {
        ball.dx *= -1;
        // Increase ball speed slightly after each hit
        ball.dx *= 1.1;
        ball.dy *= 1.1;
    } else if (
        ball.x + ball.radius > computer.x &&
        ball.y > computer.y &&
        ball.y < computer.y + computer.height
    ) {
        ball.dx *= -1;
        // Increase ball speed slightly after each hit
        ball.dx *= 1.1;
        ball.dy *= 1.1;
    }

    // Ball goes out of bounds
    if (ball.x + ball.radius < 0) {
        computer.score++;
        resetBall();
    } else if (ball.x - ball.radius > canvas.width) {
        player.score++;
        resetBall();
    }
}

function moveComputer() {
    if (computer.y + computer.height / 2 < ball.y) {
        computer.y += computer.dy;
    } else if (computer.y + computer.height / 2 > ball.y) {
        computer.y -= computer.dy;
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 4;
    ball.dy = -4;
}

function checkWin() {
    const winningScore = 5; // Set the winning score
    if (player.score >= winningScore) {
        alert("Player Wins!");
        resetGame();
    } else if (computer.score >= winningScore) {
        alert("Computer Wins!");
        resetGame();
    }
}

function resetGame() {
    player.score = 0;
    computer.score = 0;
    resetBall();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(player.x, player.y, player.width, player.height);
    drawPaddle(computer.x, computer.y, computer.width, computer.height);
    drawBall(ball.x, ball.y, ball.radius);
    drawScore();
}

function update() {
    if (!isPaused) {
        movePaddle();
        moveBall();
        moveComputer();
        checkWin();
    }
    draw();
}

function keyDownHandler(e) {
    if (e.key === "ArrowUp") {
        upPressed = true;
    } else if (e.key === "ArrowDown") {
        downPressed = true;
    } else if (e.key === " ") {
        isPaused = !isPaused; // Toggle pause
    }
}

function keyUpHandler(e) {
    if (e.key === "ArrowUp") {
        upPressed = false;
    } else if (e.key === "ArrowDown") {
        downPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

setInterval(update, 1000 / 60);
