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

function getHumanChoice() {
    let choice = prompt("Rock (r), Paper (p), or Scissors (s)?");

    if (choice == "r") {
        return "Rock";
    } else if (choice == "p") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(computerChoice, humanChoice) {


    computerChoice = computerChoice.toUpperCase();
    console.log("Computer played: " + computerChoice);
    humanChoice = humanChoice.toUpperCase();
    console.log("Human played: " + humanChoice);

    const winMap = new Map();
    winMap.set('ROCK', 'SCISSORS');
    winMap.set('PAPER', 'ROCK');
    winMap.set('SCISSORS', 'PAPER');

    if (winMap.get(computerChoice) == humanChoice) {
        computerScore += 1;
        removePlay = 1
        return console.log("Computer wins!");
    } else if (winMap.get(humanChoice) == computerChoice) {
        humanScore += 1;
        removePlay =  1;
        return console.log("Human wins!")
    } else {
        removePlay = 0;
        return console.log("We have ourselves a tie game!");
    }
}

function playGame() {

    for (let i = 0; i < 5; i += removePlay) {
        playRound(getComputerChoice(), getHumanChoice());
        console.log("Computer Score: " + computerScore);
        console.log("Human Score: " + humanScore);
    }

    if (computerScore > humanScore) {
        console.log("Computer wins! AI takes over the world!");
    } else {
        console.log("Human wins! Take that, processor scum!");
    }
}

let computerScore = 0;
let humanScore = 0;
let removePlay = 0;

//computerChoice = getComputerChoice();
//humanChoice = getHumanChoice();

playGame();