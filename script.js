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
            removeButtons();
        } else {
            winner.textContent = "Computer wins! AI takes over the world!";
            removeButtons();
        }
    }
    console.log("Check winner ran")
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

    playRound(getComputerChoice(), getHumanChoice());
    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);


    if (computerScore > humanScore) {
        console.log("Computer wins! AI takes over the world!");
    } else {
        console.log("Human wins! Take that, processor scum!");
    }
}


let computerScore = 0;
let humanScore = 0;
let removePlay = 0;

const winner = document.querySelector(".winner-announcement");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

btnRock.addEventListener("click", () => {

    playRound(getComputerChoice(), "Rock");

})

btnPaper.addEventListener("click", () => {

    playRound(getComputerChoice(), "Paper");

})


btnScissors.addEventListener("click", () => {
    
    playRound(getComputerChoice(), "Scissors");

})
//playGame();