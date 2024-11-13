function getComputerChoice() {
    let randNum = Math.round(Math.random() * 99);

    console.log(randNum)

    if (randNum <= 33) {
        return "Rock"; 
    } else if (randNum <=66) {
        return "Paper";
    }   else {
        return "Scissors";
    }
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            winner.textContent = "You win! Take that, processor scum!";
            endGame();
        } else {
            winner.textContent = "Computer wins! AI takes over the world!";
            endGame();
        }
    }
}

function removeButtons() {
    btnRock.remove();
    btnPaper.remove();
    btnScissors.remove();
}

function playRound(computerChoice, humanChoice) {


    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    const winMap = new Map();
    winMap.set('rock', 'scissors');
    winMap.set('paper', 'rock');
    winMap.set('scissors', 'paper');

    const infoDisplay = document.querySelector(".info-container p");
    const humanScoreDisplay = document.querySelector(".human-score-display");
    const computerScoreDisplay = document.querySelector(".computer-score-display");

    if (winMap.get(computerChoice) == humanChoice) {
        computerScore += 1;
        infoDisplay.textContent = "Computer played " + computerChoice + " -- Computer wins!";
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        checkWinner();
    } else if (winMap.get(humanChoice) == computerChoice) {
        humanScore += 1;
        infoDisplay.textContent = "Computer played " + computerChoice + " -- You win!";
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        checkWinner();
    } else {
        infoDisplay.textContent = "Computer played " + computerChoice + " -- We have ourselves a tie round!";
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        checkWinner();
    }
}

function playGame() {
    btnRock.addEventListener("click", playRock);   
    btnPaper.addEventListener("click", playPaper);   
    btnScissors.addEventListener("click", playScissors);
}

function endGame() {
    btnRock.removeEventListener("click", playRock);
    btnPaper.removeEventListener("click", playPaper);
    btnScissors.removeEventListener("click", playScissors);
    const replay = document.querySelector(".replay-container");
    const btnReplay = document.createElement("button");
    btnReplay.textContent = "Play Again";
    btnReplay.style.padding = "24px";
    btnReplay.style.fontSize = "24px";
    btnReplay.style.fontWeight = "bold";
    replay.appendChild(btnReplay);

    btnReplay.addEventListener("click", () => {
        location.reload();
    });
}

function playRock() {
    playRound(getComputerChoice(), "Rock");
}

function playPaper() {
    playRound(getComputerChoice(), "Paper");
}

function playScissors() {
    playRound(getComputerChoice(), "Scissors");
}

let computerScore = 0;
let humanScore = 0;

const winner = document.querySelector(".winner-announcement");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

playGame();